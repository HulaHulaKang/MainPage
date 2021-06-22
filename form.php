<!DOCTYPE html>
<html lang="zh-cn">
<head>
<title>FORM</title>
<meta charset="utf-8">
</head>
<body>
<form action="form.php" enctype="mutilpart/formdata" method="post">
<ul>
<li>PHP:<input type="file" name="php"></li>
<li>CSS:<input type="file" name="css"></li>
<li>JS:<input type="file" name="js"></li>
<li>Index_Header:<input type="file" name="header"></li>
<li>Footer:<input type="file" name="footer"></li>
<li>FORM:<input type="file" name="form">
</ul>

<input type="submit" value="上传">
</form>
<?php var_dump($_FILES)
?>
</body>
</html>