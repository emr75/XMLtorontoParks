<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html lang="en">
        <head>
            <title>Toronto Parks</title>
        </head>
        <body>
            <xsl:apply-templates select="//Location[LocationID=9]"/>              
        </body>
    </html>
</xsl:template>
<xsl:template match="Location">                  
        <div>
        <h1><xsl:value-of select="LocationName"/></h1>
        <p>Location: <xsl:value-of select="Address"/></p>
        <p><xsl:apply-templates select="PhoneNumber"/></p>
        </div>
        <div>
        <h2>Facilities</h2>  
        </div>
        <ul>
        <xsl:apply-templates select=".//Facility"/>
        </ul>      
</xsl:template>

<xsl:template match="//Facility">
   <li> <xsl:value-of select=".//FacilityDisplayName"  /> -
    <xsl:value-of select=".//FacilityName" /></li>        
</xsl:template>




<xsl:template match="*">
  <li><xsl:value-of select="." /></li>
</xsl:template>
</xsl:stylesheet>


<!--[@LocationID ='9']

       <xsl:value-of select=".//FacilityDisplayName"  />
        <xsl:value-of select=".//FacilityName" />




-->

