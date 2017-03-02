<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>

<%
	
	dim conString
	conString = "Provider=SQLOLEDB;Data Source=DESKTOP-4HE34MH\SQLEXPRESS;Initial Catalog=rockPaperScissors;User Id=sa;Password=p@ssw0rd;"

	'Check for logout
	if request.QueryString("id") = "logout" then
		session.Abandon
		response.Redirect("/?message=logout")
	end if
	
	'simple server side checking of validation
	if request.Form("username") = "" or request.Form("password") = "" then
		 response.Redirect("/?message=novalue") 
	end if
	
	'stop some simple sql injection
	function sqlInjection(inputName)
		sqlInjection = replace(replace(replace(request.Form(inputName),"'","''"),"--",""),";","")
	end function

	dim txtUsername, txtPassword

	txtUsername = sqlInjection("username")
	txtPassword = sqlInjection("password")

	response.write(txtUsername)
	response.write(txtPassword)
	
	'Check Login Credentials
	Dim Connection, Recordset
	Dim sSQL, locationSTR, subPost, minNumber, maxNumber

	sSQL="SELECT * FROM [Users] where [Username] = '"&txtUsername&"' and [Password] = '"&txtPassword&"'"
	
	Set connection = Server.CreateObject("ADODB.Connection")
	Set recordset = Server.CreateObject("ADODB.Recordset")
	connection.Open conString
	recordset.Open sSQL,connection
	
	
	If Recordset.EOF Then
		response.Redirect("/?message=incorrectDetails")
	else
		session("letsplaysomeRPS") = true
		session("loggedinusername") = txtUsername
		response.Redirect("/letsPlay/")
	end if
	


	'Housekeeping
	Recordset.Close
	Connection.Close
	Set Recordset = Nothing
	Set Connection = Nothing
%>
