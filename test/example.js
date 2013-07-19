package com.example.tests;

import com.thoughtworks.selenium.*;
import java.util.regex.Pattern;

public class example extends SeleneseTestCase {
	public void setUp() throws Exception {
		setUp("http://kua.startsiden.no/nettguide", "*chrome");
	}
	public void testExample() throws Exception {
		selenium.open("/nettguide/bolig_og_interior/");
		selenium.setTimeout("");
		assertTrue(selenium.isElementPresent("//div[@id='ads_annonsebilag']"));
		assertTrue(selenium.isElementPresent("//div[@id='ads_bottom']"));
		assertTrue(selenium.isElementPresent("//div[@id='ads_left_middle']"));
		assertTrue(selenium.isElementPresent("//div[@id='ads_middle']"));
		assertTrue(selenium.isElementPresent("//div[@id='ads_outer_right']"));
		assertTrue(selenium.isElementPresent("//div[@id='top_ads']"));
		assertTrue(selenium.isElementPresent("//div[@id='ads_wallpaper_ad']"));
	}
}
