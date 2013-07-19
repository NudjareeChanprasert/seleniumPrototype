package com.example.tests;

import com.thoughtworks.selenium.*;
import org.testng.annotations.*;
import static org.testng.Assert.*;
import java.util.regex.Pattern;

public class testAds_motor extends SeleneseTestNgHelper {
	@Test public void testTestAds_motor() throws Exception {
		selenium.open("/nettguide/motor");
		selenium.setTimeout("");
		assertTrue(selenium.isElementPresent("//div[@id='top_ads']"));
		assertTrue(selenium.isElementPresent("//div[@id='ads_annonsebilag']"));
		assertTrue(selenium.isElementPresent("//div[@id='middleads']"));
		assertTrue(selenium.isElementPresent("//div[@id='ads_outer_right']"));
		assertTrue(selenium.isElementPresent("//div[@id='ads_bottom']"));
		assertTrue(selenium.isElementPresent("//div[@id='ads_wallpaper_ad']"));
	}
}
