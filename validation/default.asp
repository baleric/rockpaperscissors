<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>

<%
	
	dim conString
	'define connection string to database.'
	conString = "Provider=SQLOLEDB;Data Source=DESKTOP-4HE34MH\SQLEXPRESS;Initial Catalog=rockPaperScissors;User Id=sa;Password=p@ssw0rd;"

	'Check for logout
	if request.QueryString("id") = "logout" then
		'destroy server side sessions.
		session.Abandon
		'redirect to login and display logout message.
		response.Redirect("/?message=logout")
	end if
	
	'simple server side checking of validation
	if request.Form("username") = "" or request.Form("password") = "" then
		 response.Redirect("/?message=novalue") 
	end if
	
	'stop some simple sql injection
	function sqlInjection(inputName)
		'replace bad stuff in text string
		sqlInjection = replace(replace(replace(request.Form(inputName),"'","''"),"--",""),";","")
	end function

	dim txtUsername, txtPassword

	'setup new variables with clean strings'
	txtUsername = sqlInjection("username")
	txtPassword = sqlInjection("password")
	
	Dim Connection, Recordset, sSQL

	'Check Login Credentials against DB
	sSQL="SELECT * FROM [Users] where [Username] = '"&txtUsername&"' and [Password] = '"&txtPassword&"'"
	
	'establish the db connection and recordset and assign to variables'
	Set connection = Server.CreateObject("ADODB.Connection")
	Set recordset = Server.CreateObject("ADODB.Recordset")
	connection.Open conString
	recordset.Open sSQL,connection
	
	'if recordset is empty, there are no records that match the credentials provided.
	If Recordset.EOF Then
		'redirect to login again'
		response.Redirect("/?message=incorrectDetails")
	else
		'set a server side session to allow secure pages to be accessed'
		session("letsplaysomeRPS") = true
		'create a session that holds first name from db.
		session("loggedinusername") = recordset("firstname")
		'redirect to the game
		response.Redirect("/letsPlay/")
	end if

	'Housekeeping - remove connection instances from memory
	Recordset.Close
	Connection.Close
	Set Recordset = Nothing
	Set Connection = Nothing
%>
