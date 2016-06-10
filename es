<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 <head> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
  <meta name="designer" content="“网站开发设计制作：杭州蒙特信息技术有限公司" www.mountor.com 咨询电话0571-88368188”> 
  <meta name="description" content="Hangzhou Hikvision Digital Technology Co. Ltd."> 
  <meta name="keywords" content="Hangzhou Hikvision Digital Technology Co., Ltd."> 
  <!--<meta name="viewport" content="width=1280, initial-scale=0.2"/> --> 
  <meta name="viewport" content="width=1070, initial-scale=1.0"> 
  <meta http-equiv="Cache-Control" content="max-age=1800"> 
  <title>Hangzhou Hikvision Digital Technology Co. Ltd.</title> 
  <link rel="bookmark" href="../favicon.ico" mce_href="../favicon.ico" type="image/x-icon"> 
  <link rel="icon" href="../favicon.ico" mce_href="../favicon.ico" type="image/x-icon"> 
  <link rel="shortcut icon" href="../favicon.ico" mce_href="../favicon.ico" type="image/x-icon"> 
  <link rel="stylesheet" type="text/css" href="css/index.css"> 
  <link rel="stylesheet" type="text/css" href="css/main.css"> 
  <script type="text/javascript" src="js/jquery.js"></script> 
  <script type="text/javascript" src="js/jquery.SuperSlide.2.1.1.js"></script> 
  <script type="text/javascript" src="js/imgchange.js"></script> 
 </head> 
 <body> 
  <div class="container"> 
   <script src="js/jQuery.md5.js" type="text/javascript"></script> 
   <script type="text/javascript">
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

        if (arr = document.cookie.match(reg))

            return unescape(arr[2]);
        else
            return null;
    }
    $(function () {
        var logstr = getCookie("UserName");
        if (logstr != null && logstr != "") {
            $("#UserNameLable").html(logstr);
	    $("#denglu").html("Logged In");
        }
        $(".nav .right ul li").hover(function () {
            $(this).children("ul").show();
        }, function () {
            $(this).children("ul").hide();
        });
        $(".login_1").hover(function () {
            if (logstr != null && logstr != "") {
                $("#LoginAfter").toggle();
		$("#denglu").html("Logged In");
            } else {
                $(".login_main").toggle();
            }
        });
        $("#language").hover(function () {
            $(this).children("ul").toggle();
        });
    });



</script> 
   <div class="head"> 
    <div class="header"> 
     <div class="login_1"> 
      <p id="denglu">Login</p> 
      <form id="form2" action="" method="post" style="display:block"> 
       <div class="login_main"> 
        <ul> 
         <li>User Name</li> 
         <li id="ErrorText2" style="display:none;font-size:12px; color:#d71921;">The combination of username and password is incorrect.</li> 
         <li><input name="UserName" id="UserName2" type="text" class="text"></li> 
         <li>Password</li> 
         <li><input name="Password" id="Password2" type="password" class="text"></li> 
         <li><a href="javascript:SubmitForm2()" title="" class="btn">Login</a></li> 
         <li> <p class="p1"><input name="KeepLogin" id="KeepLogin" type="checkbox" value="7"></p> <p class="p2">Stay logged in</p> <p class="p3"><a href="../en/ForgetPassword.aspx?stat=1&amp;stat=1&amp;c_kind=34&amp;c_kind2=41" title="">Forgot your password?</a></p> </li> 
         <li>New User?</li> 
         <li><a href="../en/Regist.aspx?stat=1&amp;stat=1&amp;c_kind=34&amp;c_kind2=41" class="btn_1" title="">Register</a></li> 
        </ul> 
       </div> 
      </form> 
      <div class="login_after" id="LoginAfter"> 
       <div class="top">
        <h3 style="font-weight:bolder">Hello,<label id="UserNameLable"></label>!</h3>Welcome to Hikvision online service.
       </div> 
       <div class="center"> 
        <ul> 
         <li><a href="../en/OnlineInquiry.aspx?stat=1&amp;stat=1&amp;c_kind=59&amp;c_kind2=61" title="">Online Enquiry</a></li> 
         <li><a href="../en/OnlineTraining.aspx?stat=1&amp;stat=1&amp;c_kind=34&amp;c_kind2=41" title="">Online Training</a></li> 
        </ul> 
       </div> 
       <div class="center"> 
        <ul> 
         <li><a href="../en/Tools_82.html" title="">Download</a></li> 
         <li><a href="../en/about_400.html" title="">HEOP Program</a></li> 
        </ul> 
       </div> 
       <div class="bottom"> 
        <ul> 
         <li><a href="../en/UpdatProfile.aspx?stat=1&amp;stat=1&amp;c_kind=34&amp;c_kind2=41" title="">Update profile</a></li> 
         <li><a href="../en/ChangePassword.aspx?stat=1&amp;stat=1&amp;c_kind=34&amp;c_kind2=41" title="">Change Password</a></li> 
         <li><a href="../en/LoginOut.aspx?stat=1&amp;stat=1&amp;c_kind=34&amp;c_kind2=41" title="">Sign Out</a></li> 
        </ul> 
       </div> 
      </div> 
     </div> 
     <ul class="ul"> 
      <li><p>Headquarters</p><span>|</span></li> 
      <li><a target="_blank" href="http://www.hikvision.com/en/us/" title="North America" class="a1"></a></li> 
      <li><a target="_blank" href="http://www.hikvision.com/europe/" title="EU" class="a2"></a></li> 
      <li><a target="_blank" href="http://www.hikvision.com/fr/" title="France" class="aaa"><img src="images/Frances.png"></a></li> 
      <li><a target="_blank" href="http://www.hikvision.com/es/" title="Castellano" class="a3"></a></li> 
      <!--<li><a href="#" title="Frances" class="a4"></a></li>--> 
      <!--<li><a href="#" title="Italiano" class="a5"></a></li>--> 
      <li><a target="_blank" href="http://www.hikvision.ru/" title="Русский" class="a6"></a></li> 
      <li><a target="_blank" href="http://www.hikvision.com/tr/" title="Türkçe" class="a7"></a></li> 
      <!--<li><a href="#" title="Portugues" class="a8"></a></li>--> 
      <li><a target="_blank" href="http://www.hikvisionindia.co.in" title="India" class="aaa"><img src="images/India.jpg"></a></li> 
      <li><a target="_blank" href="http://www.hikvision.com/ar/" title="Arabic" class="aaa"><img src="images/Arabic.png"></a></li> 
      <li><a target="_blank" href="http://www.hikvision.com/korean/" title="korea" class="aaa"><img src="images/korean.png"></a></li> 
      <li class="li" id="language"> <p>- Country / Regions -</p> 
       <ul> 
        <li><a href="http://www.hikvision.com/en/" target="_blank">Headquarters</a></li> 
        <li><a href="http://www.hikvision.com/cn/" target="_blank">中文</a></li> 
        <li><a href="http://www.hikvision.com/ar/" target="_blank">Arabic</a></li> 
        <li><a href="http://www.hikvision.com/es/" target="_blank">Castellano</a></li> 
        <li><a href="http://www.hikvision.com/europe/" target="_blank">Europe</a></li> 
        <li><a href="http://www.hikvision.com/fr/" target="_blank">France</a></li> 
        <li><a href="http://www.hikvisionindia.co.in" target="_blank">India</a></li> 
        <li><a href="http://www.hikvision.com/korean/" target="_blank">Korea</a></li> 
        <li><a href="http://www.hikvision.com/us/" target="_blank">North America</a></li> 
        <li><a href="http://www.hikvision.ru/" target="_blank">Русский</a></li> 
        <li><a href="http://www.hikvision.com/tr/" target="_blank">Türkçe</a></li> 
       </ul> </li> 
     </ul> 
    </div> 
    <div class="nav"> 
     <h1 class="logo"><a href="/" title=""><img src="../../en/images/logo.png" alt=""></a></h1> 
     <div class="right"> 
      <ul> 
       <li><a href="index.html" title=""><img src="../../en/images/nav_1.png" alt="" onmouseover="this.src='../../en/images/nav_1_1.png'" onmouseout="this.src='../../en/images/nav_1.png'"></a></li> 
       <li><a href="product_1.html" title=""><img src="../../en/images/nav_2.png" alt="" onmouseover="this.src='../../en/images/nav_2_1.png'" onmouseout="this.src='../../en/images/nav_2.png'"></a> 
        <ul class="ul1"> 
         <li class="li1"><a href="products_157.html" title="">Network Camera</a></li> 
         <li class="li2"><a href="products_120.html" title="">Analog Camera</a></li> 
         <li class="li1"><a href="products_489.html" title="">PTZ</a></li> 
         <li class="li2"><a href="products_210.html" title="">Network Video Recorder</a></li> 
         <li class="li1"><a href="products_364.html" title="">Digital Video Recorder</a></li> 
         <li class="li2"><a href="products_223.html" title="">Hybrid Video Recorder</a></li> 
         <li class="li1"><a href="products_226.html" title="">Encoder &amp; Decoder</a></li> 
         <li class="li2"><a href="products_233.html" title="">Video Encode &amp; Decode Card</a></li> 
         <li class="li1"><a href="products_646.html" title="">Mobile &amp; Traffic</a></li> 
         <li class="li2"><a href="products_107.html" title="">Network Storage</a></li> 
         <li class="li1"><a href="products_238.html" title="">Accessories</a></li> 
         <li class="li2"><a href="products_243.html" title="">Dedicated Product</a></li> 
         <li class="li li1"><a href="products_408.html" title="">Discontinued Product</a></li> 
        </ul> </li> 
       <li><a href="solutions_615.html" title=""><img src="../../en/images/nav_8.png" alt="" onmouseover="this.src='../../en/images/nav_8_1.png'" onmouseout="this.src='../../en/images/nav_8.png'"></a> 
        <ul> 
         <li> <a href="solutions_615.html" title="">Retail</a></li> 
         <li> <a href="solutions2_650.html" title="">Transport &amp; Traffic</a></li> 
         <li> <a href="solutions2_610.html" title="">Banking &amp; Finance</a></li> 
         <li> <a href="solutions_618.html" title=""> Industrial</a></li> 
         <li> <a href="solutions3_644.html" title="">Hotel</a></li> 
        </ul> </li> 
       <li><a href="vmsproducts_531.html" title=""><img src="../../en/images/nav_3.png" alt="" onmouseover="this.src='../../en/images/nav_3_1.png'" onmouseout="this.src='../../en/images/nav_3.png'"></a> 
        <ul> 
         <li><a href="vmsproducts_531.html" title="">VMS-Products</a></li> 
         <li><a href="addon_532.html" title="">ADD-ON</a></li> 
         <li class="li"><a href="vmssupport_533.html" title="">VMS Support</a></li> 
        </ul> </li> 
       <li><a href="press-release_74.html" title=""><img src="../../en/images/nav_4.png" alt="" onmouseover="this.src='../../en/images/nav_4_1.png'" onmouseout="this.src='../../en/images/nav_4.png'"></a> 
        <ul> 
         <li><a href="press-release_74.html" title="">Press Release</a></li> 
         <li><a href="events_72.html" title="">Events</a></li> 
         <li class="li"><a href="successstory_73.html" title="">Success Stories</a></li> 
        </ul> </li> 
       <li><a href="faq_81.html" title=""><img src="../../en/images/nav_5.png" alt="" onmouseover="this.src='../../en/images/nav_5_1.png'" onmouseout="this.src='../../en/images/nav_5.png'"></a> 
        <ul> 
         <li><a href="faq_81.html" title="">Notice</a></li> 
         <li><a href="tools_82.html" title="">Download</a></li> 
         <li><a href="list_90.html" title="">Knowledge Base</a></li> 
         <li><a href="listzimu_92.html" title="">FAQ</a></li> 
         <li><a href="whitepaper_39.html" title="">White Paper</a></li> 
         <li><a href="video_651.html" title="">Video</a></li> 
         <li><a href="OnlineCoursenew.aspx?stat=1&amp;c_kind=34&amp;c_kind2=41&amp;c_kind3=351" title="">Training</a></li> 
         <li class="li"><a href="list01_435.html" title="">Security Center</a></li> 
        </ul> </li> 
       <li><a href="partner_43.html" title=""><img src="../../en/images/nav_6.png" alt="" onmouseover="this.src='../../en/images/nav_6_1.png'" onmouseout="this.src='../../en/images/nav_6.png'"></a> 
        <ul> 
         <li><a href="partnerlist.aspx?stat=1&amp;c_kind=43&amp;c_kind2=44&amp;c_kind3=46" title="">Technology Partners</a></li> 
         <li><a href="distributionPartner.aspx?stat=1&amp;c_kind=43&amp;c_kind2=45&amp;c_kind3=51&amp;c_kind4=247" title="">Distribution Partners</a></li> 
         <li class="li"><a href="about_400.html" title="">Embedded Open Platform</a></li> 
        </ul> </li> 
       <li><a href="about_60.html" title=""><img src="../../en/images/nav_7.png" alt="" onmouseover="this.src='../../en/images/nav_7_1.png'" onmouseout="this.src='../../en/images/nav_7.png'"></a> 
        <ul class="ul"> 
         <li><a href="about_60.html" title="">Company Profile</a></li> 
         <li><a href="OnlineInquiry.aspx?stat=1&amp;c_kind=59&amp;c_kind2=61" title="">Online Inquiry</a></li> 
         <li><a href="hr" title="">Career</a></li> 
         <li class="li"><a href="contacthikvision_62.html" title="">Contact Us</a></li> 
        </ul> </li> 
      </ul> 
     </div> 
     <form id="ser" method="post" action="javascript:qwsearch();"> 
      <div class="search2">
       <div class="text">
        <input name="qwsearch" id="qwsearch" type="text" value="Search" onblur="if (this.value==''){ this.value='Search';}" onfocus="if (this.value=='Search') {this.value='';}" class="text1">
       </div>
       <input onclick="qwsearch();" name="" type="submit" value="" class="btn">
      </div> 
     </form> 
    </div> 
   </div> 
   <script language="javascript" type="text/javascript">
						function qwsearch() {
                            var keycp = document.getElementById("qwsearch");
                            if (keycp.value != null && keycp.value != "" && keycp.value != "Search") {
                                window.location.href = "searchz.aspx?stat=1&id=1&key=" + keycp.value;
                            }
                            else {
                                alert("Please type a keyword for your search");
                            }
                        }
                        </script> 
   <script language="javascript" type="text/javascript">
    $(function () {
        $("#language").change(function () {
            //            window.open($("#language").val());
            if ($("#language").val() != "") {
                window.location = $("#language").val()
            }
        });

    });
    

</script> 
   <script type="text/javascript">
    function check2() {
        if ($("#UserName2").val() == null || $("#UserName2").val() == "" || $("#Password2").val() == null || $("#Password2").val() == "") {
            $("#ErrorText2").show();
            $("#ErrorText2").html("The combination of username and password is incorrect.");
            $("#UserName2").focus();
            $("#UserName2").select();
            return false;
        } else {
            $("#ErrorText2").hide();
            //alert($.md5($("#Password2").val()));
            document.getElementById("Password2").value = $.md5($("#Password2").val());
            //$("#Password2").val() = $.md5($("#Password2").val());
        }
        return true;
    }
    function SubmitForm2() {
        if (check2()) {

            $.ajax({
                url: "../en/ashx/Login.ashx",
                type: 'post',
                data: $('#form2').serialize(),
                dataType: 'text',
                async: false,
                success: function (msg) {
                    if (msg == "true") {
                        if ($("#KeepLogin").attr("checked") == true) {
                            addCookie2("UserName", $("#UserName2").val(), 168);
                        }
                        $("#UserNameLable").html($("#UserName2").val());
                        $("#form2").hide();
                        $("#LoginAfter").show();
			$("#denglu").html("Logged In");

                    }
                    if (msg.indexOf("@") >= 0) {
                        $("#ErrorText2").show();
                        if (msg.indexOf("false") >= 0) {
                            $("#ErrorText2").html("邮件发送失败");
                        }
                        else {
                            $("#ErrorText2").html("Sorry, your account has not been activated. Activation link has been sent to " + msg + ", please click it to activate.");
                        }
                        
                    }
                    if (msg == "false") {
                        $("#ErrorText2").show();
                        $("#ErrorText2").html("The combination of username and password is incorrect.");
                        $("#form2").show();
                        $("#LoginAfter").hide();
                    }

                }
            });
        }


    }
    function addCookie2(objName, objValue, objHours) {      //添加cookie

        var str = objName + "=" + escape(objValue);

        if (objHours > 0) {                               //为时不设定过期时间，浏览器关闭时cookie自动消失

            var date = new Date();

            var ms = objHours * 3600 * 1000;

            date.setTime(date.getTime() + ms);

            str += "; expires=" + date.toGMTString() + ";path=/";

        }

        document.cookie = str;

    }

 </script> 
   <div class="banners"> 
    <div id="mVisual" class="banner"> 
     <div class="left">
      <li id="bImg1" style="z-index:1"><a href="http://overseas.hikvision.com/en/products_157.html" target="_blank" title=""><img src="../upload/youqing/20151218105853349_236.jpg" alt=""></a></li>
      <li id="bImg2" style="z-index:1"><a href="http://overseas.hikvision.com/en/products_174.html" target="_blank" title=""><img src="../upload/youqing/20151218105821400_235.jpg" alt=""></a></li>
      <li id="bImg3" style="z-index:1"><a href="http://overseas.hikvision.com/en/Smart2.0/" target="_blank" title=""><img src="../upload/youqing/20151218105725583_231.jpg" alt=""></a></li>
      <li id="bImg4" style="z-index:1"><a href="vmsproducts_531.html" target="_blank" title=""><img src="../upload/youqing/20151218105739202_229.jpg" alt=""></a></li>
     </div> 
     <ul id="mSImg" class="right hd"> 
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
     </ul> 
    </div> 
   </div> 
   <script type="text/javascript">
                //jQuery("#mVisual").slide({ mainCell: ".left", autoPage: true, effect: "leftLoop",interTime:5500, autoPlay: true, vis: 1 });
                jQuery("#mVisual").slide({ mainCell:".left",titCell:".hd li", effect:"leftLoop", autoPlay:true, delayTime:300, triggerTime:50,interTime:3500});	
            </script> 
   <div class="main-box"> 
    <div class="main"> 
     <div class="left"> 
      <div class="news"> 
       <h3><a href="Press-Release_74.html" title="">News</a></h3> 
       <ul id="news"> 
        <li><p><a href="Press-Release-details_74_i898.html" title="Hikvision Partners with Agent Vi to Offer Intelligent Solution for Security Market">Hikvision Partners with Agent Vi to ...</a><span> 06.01</span></p></li>
        <li><p><a href="Press-Release-details_74_i1279.html" title="Hikvision Showcases Leading Surveillance Technology at IFSEC 2016">Hikvision Showcases Leading Surveill...</a><span> 06.09</span></p></li>
        <li><p><a href="Press-Release-details_79_i1256.html" title="Hikvision Launches New PanoVu Series Panoramic Cameras">Hikvision Launches New PanoVu Series...</a><span> 05.31</span></p></li> 
       </ul> 
       <div class="po"> 
        <ul> 
         <li><a class="a">&nbsp;</a></li> 
         <li><a>&nbsp;</a></li> 
         <li><a>&nbsp;</a></li> 
        </ul> 
       </div> 
       <div class="view">
        <a href="Press-Release_74.html" title="">View All News</a>
        <a href="rss.aspx" target="_blank" title=""><img src="images/view.png"></a>
       </div> 
      </div> 
      <div class="events"> 
       <h3><a href="Events_72.html" title="">Events</a></h3> 
       <div id="events"> 
        <dl>
         <dt>
          <a href="Events-details_72_i1189.html" title=""><img src="../uploads/d0614a3f-e92f-4bbb-a72b-562b9496b5cb/1604250338263826.jpg" alt="" width="60" height="60"></a>
         </dt>
         <dd>
          <a href="Events-details_72_i1189.html" title="">IFSEC UK 2016</a>
         </dd>
         <dd>
          June 21-23
         </dd>
         <dd>
          London, UK
         </dd>
         <dd>
          Booth number:Hall 4 / E800
         </dd>
        </dl> 
        <dl>
         <dt>
          <a href="Events-details_72_i1123.html" title=""><img src="../uploads/f75e624f-7127-4896-9e05-eb1f048905e7/160401030249249.jpg" alt="" width="60" height="60"></a>
         </dt>
         <dd>
          <a href="Events-details_72_i1123.html" title="">Securex South Africa 2016</a>
         </dd>
         <dd>
          May 24-26
         </dd>
         <dd>
          Johannesburg, South Africa
         </dd>
         <dd>
          Booth number:A04
         </dd>
        </dl> 
       </div> 
       <div class="po"> 
        <ul> 
         <li><a class="a">&nbsp;</a></li> 
         <li><a>&nbsp;</a></li> 
         <li><a>&nbsp;</a></li> 
        </ul> 
       </div> 
       <div class="view">
        <a href="Events_72.html" title="">View All Events</a>
       </div> 
      </div> 
     </div> 
     <div class="products"> 
      <h3><a href="product_1.html" title="">Product Spotlight</a></h3> 
      <a class="btn_left prev" href="javascript:void(0);" title=""></a> 
      <a class="btn_right next" href="javascript:void(0);" title=""></a> 
      <div id="products" class="bd"> 
       <div class="ff"> 
        <ul>
         <li><a href="Products_accessries_159_i5610.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20150514185849729.jpg" alt=""></a></li>
         <li><a href="Products_accessries_159_i5610.html" title="">DS-2CD2T42WD-I3/I5/I8</a></li>
         <li>4MP EXIR Network Bullet Camera</li>
        </ul> 
        <ul>
         <li><a href="Products_accessries_159_i5611.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20150514185937060.jpg" alt=""></a></li>
         <li><a href="Products_accessries_159_i5611.html" title="">DS-2CD2T22WD-I3/I5/I8</a></li>
         <li>2MP EXIR Network Bullet Camera</li>
        </ul> 
        <ul>
         <li><a href="Products_accessries_209_i5602.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20150514185757282.jpg" alt=""></a></li>
         <li><a href="Products_accessries_209_i5602.html" title="">DS-2CD2522FWD-I(W)(S)</a></li>
         <li>2MP WDR Mini Dome Network Camera</li>
        </ul> 
        <ul>
         <li><a href="Products_accessries_508_i5558.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20150506112032387.jpg" alt=""></a></li>
         <li><a href="Products_accessries_508_i5558.html" title="">DS-2CD4A65F-IZ(H)(S)</a></li>
         <li>6MP Smart IP Outdoor Bullet Camera</li>
        </ul>
       </div>
       <div class="ff"> 
        <ul>
         <li><a href="Products_accessries_209_i5601.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20150514185713476.jpg" alt=""></a></li>
         <li><a href="Products_accessries_209_i5601.html" title="">DS-2CD2542FWD-I(W)(S)</a></li>
         <li>4MP WDR Mini Dome Network Camera</li>
        </ul> 
        <ul>
         <li><a href="Products_accessries_159_i5636.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20150514184157452.jpg" alt=""></a></li>
         <li><a href="Products_accessries_159_i5636.html" title="">DS-2CD2342WD-I</a></li>
         <li>4MP WDR EXIR Turret Network Camera</li>
        </ul> 
        <ul>
         <li><a href="Products_accessries_157_i5609.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20150514185346339.jpg" alt=""></a></li>
         <li><a href="Products_accessries_157_i5609.html" title="">DS-2CD2022WD-I</a></li>
         <li>2MP IR Bullet Network Camera</li>
        </ul> 
        <ul>
         <li><a href="Products_accessries_210_i5731.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20151010143023233.jpg" alt=""></a></li>
         <li><a href="Products_accessries_210_i5731.html" title="">DS-9632/64NI-I16</a></li>
         <li>Embedded 4K NVR</li>
        </ul>
       </div>
       <div class="ff"> 
        <ul>
         <li><a href="Products_accessries_168_i5658.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20141114124645877.jpg" alt=""></a></li>
         <li><a href="Products_accessries_168_i5658.html" title="">DS-2CD63C2F-I(V)(S)</a></li>
         <li>12MP Fisheye Network Camera</li>
        </ul> 
        <ul>
         <li><a href="Products_accessries_159_i5637.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20150514184245547.jpg" alt=""></a></li>
         <li><a href="Products_accessries_159_i5637.html" title="">DS-2CD2322WD-I</a></li>
         <li>2MP WDR EXIR Turret Network Camera</li>
        </ul> 
        <ul>
         <li><a href="Products_accessries_157_i5608.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20150514185255825.jpg" alt=""></a></li>
         <li><a href="Products_accessries_157_i5608.html" title="">DS-2CD2042WD-I</a></li>
         <li>4MP IR Bullet Network Camera</li>
        </ul> 
        <ul>
         <li><a href="Products_accessries_512_i5612.html" title=""><img style="width:150px;height:108px;" src="/uploadfile/image/product/middle/20150515180729597.jpg" alt=""></a></li>
         <li><a href="Products_accessries_512_i5612.html" title="">DS-2CD2F42FWD-I(W)(S)</a></li>
         <li>4MP WDR Mini PT Network Camera</li>
        </ul> 
       </div> 
      </div> 
      <div class="po"> 
       <ul> 
        <li><a class="a">&nbsp;</a></li> 
        <li><a>&nbsp;</a></li> 
        <li><a>&nbsp;</a></li> 
       </ul> 
      </div> 
     </div> 
     <script type="text/javascript">
                jQuery(".products").slide({ mainCell: ".bd", autoPage: true, effect: "leftLoop",interTime:5500, autoPlay: true, vis: 1 });
            </script> 
     <div class="right"> 
      <dl> 
       <dt>
        <a href="ProductsSelector.aspx?stat=1&amp;c_kind=350" title="" target="_blank"><img src="images/img_4_1.png" alt=""></a>
       </dt> 
      </dl> 
      <dl> 
       <dt>
        <a href="Press-Release-details_74_i992.html" title=""><img src="images/img_4_2.png" alt=""></a>
       </dt> 
      </dl> 
     </div> 
     <div class="right01"> 
      <a class="twitter-timeline" href="https://twitter.com/HikvisionHQ" data-widget-id="733232119330131968">Tweets by @HikvisionHQ</a> 
      <script>    !function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + "://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs); } } (document, "script", "twitter-wjs");</script> 
     </div> 
    </div> 
   </div> 
   <div class="links"> 
    <div class="bottom"> 
     <ul> 
      <li><a target="_blank" href="http://overseas.hikvision.com/en/Smart2.0" title="Smart2.0"><img style="height:90px;" src="../upload/20151223020139306.JPG" onmouseout="javascript:this.src='../upload/20151223020139306.JPG'" onmouseover="javascript:this.src='../upload/20151223020139306.JPG'" alt=""></a></li>
      <li><a target="_blank" href="http://overseas.hikvision.com/en/EasyIp/index.html" title="Easy IP Solution"><img style="height:90px;" src="../upload/20151223020151396.JPG" onmouseout="javascript:this.src='../upload/20151223020151396.JPG'" onmouseover="javascript:this.src='../upload/20151223020151396.JPG'" alt=""></a></li>
      <li><a target="_blank" href="OnlineCoursenew.aspx?stat=1&amp;c_kind=34&amp;c_kind2=41&amp;c_kind3=351" title="Online Training"><img style="height:90px;" src="../upload/20151223020202129.JPG" onmouseout="javascript:this.src='../upload/20151223020202129.JPG'" onmouseover="javascript:this.src='../upload/20151223020202129.JPG'" alt=""></a></li>
      <li class="none"><a target="_blank" href="faq_80.html" title="Hikvision Disclaimer"><img style="height:90px;" src="../upload/20151223020212238.JPG" onmouseout="javascript:this.src='../upload/20151223020212238.JPG'" onmouseover="javascript:this.src='../upload/20151223020212238.JPG'" alt=""></a></li> 
     </ul> 
    </div> 
   </div> 
   <div class="footer"> 
    <div class="friendlink "> 
     <div class="left"> 
      <dl>
       <dt class="link2">
        Highlight
       </dt>
       <dd>
        <a href="Press-Release-details_74_i633.html" target="_blank">2014 IMS Research Ranking</a>
       </dd>
      </dl>
      <dl class="dl">
       <dt class="link2">
        Partners
       </dt>
       <dd>
        <a href="Press-Release-details_81_i496.html" target="_blank">Disclaimer for Unauthorized Distributor</a>
       </dd>
       <dd>
        <a href="http://oversea-download.hikvision.com/uploadfile//VMS Partber Standardship/VMS Partners Integration Status-20150331.pdf" target="_blank">VMS Partnership Standards</a>
       </dd>
      </dl>
      <dl class="dl1">
       <dt class="link2">
        Support
       </dt>
       <dd>
        <a href="list01_435.html" target="_blank">Security Center</a>
       </dd>
       <dd>
        <a href="Tools_82.html" target="_blank">Download</a>
       </dd>
       <dd>
        <a href="WhitePaper_39.html" target="_blank">White Paper</a>
       </dd>
      </dl>
      <dl class="dl">
       <dt class="link2">
        Others
       </dt>
       <dd>
        <a href="OnlineInquiry.aspx?stat=1&amp;stat=1&amp;c_kind=59&amp;c_kind2=61" target="_blank">Online Inquiry</a>
       </dd>
       <dd>
        <a href="contactHikvision_62.html" target="_blank">Contact Us</a>
       </dd>
      </dl> 
     </div> 
     <div class="right">
      <a href="GlobalMarketing.aspx" title=""></a>
     </div> 
    </div> 
    <div class="bottom1"> 
     <div class="left">
      © Hangzhou Hikvision Digital Technology Co.,Ltd. All Rights Reserved. powered by 
      <a href="http://www.mountor.cn" target="_blank" title="">mountor</a>
     </div> 
     <div class="right">
      <a href="https://www.facebook.com/HikvisionHQ" title="Hikvision on Facebook" target="_blank"><img src="images/icon-facebook.png"></a>
      <a href="https://twitter.com/HikvisionHQ" title="Hikvision on Twitter" target="_blank"><img src="images/icon-Twitter.png"></a>
      <a href="http://www.linkedin.com/company/hikvision" title="Hikvision on Linkedin" target="_blank"><img src="images/icon-LinkedIn.png"></a>
      <a href="https://www.youtube.com/channel/UCAt5uHvm5r71kxgm3SYyoPw" title="Hikvision on YouTube" target="_blank"><img src="images/icon-Youtube.png"></a>
     </div> 
    </div> 
   </div> 
  </div> 
  <script type="text/javascript">    
    function Change(obj, category) {
        for(var i=1;i<4;i++){
            document.getElementById(category + i).className = "";
        }
        obj.className = "a";
        $.ajax({
            url: 'ashx/index.ashx',
            type: 'post',
            data: { "id": obj.id , "category": category },
            dataType: 'text',
            async: false,
            success: function (msg) {
                if (category == "news") {
                    $("#news").html(msg);
                
                }
                if (category == "events") {
                    $("#events").html(msg);

                }
                if (category == "products") {
                    $("#products").html(msg);

                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
                alert(errorThrown);
            }   


        });
    }


    //function ChangeImage(imgId, obj) {
    //    for (var i = 1; i < 7; i++) {
    //        document.getElementById("smallImage"+i).className = "";
    //    }
    //    obj.className = "change";
    //    $.ajax({
    //        url: 'ashx/IndexImgChange.ashx',
    //        type: 'post',
    //        data: { "id": imgId},
    //        dataType: 'text',
    //        async: false,
    //        success: function (msg) {
    //            if (msg != "")
    //            {
    //                $("#bigImg").html(msg);
    //            }

    //        },
    //        error: function (XMLHttpRequest, textStatus, errorThrown) {
    //            alert(XMLHttpRequest.status);
    //            alert(XMLHttpRequest.readyState);
    //            alert(textStatus);
    //            alert(errorThrown);
    //        }


    //    });
    //}
</script>   
 </body>
</html>