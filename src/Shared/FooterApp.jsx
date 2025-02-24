import { Box, IconButton, Link, Typography } from "@mui/material"
import { GitHub, WhatsApp } from "@mui/icons-material";
let currentYear = new Date().getFullYear();
const tab = <>&nbsp;&nbsp;</>;

export const Footer = () => {
  return (
    <div className="container">
      <Box className="footer">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://lh3.googleusercontent.com/a-/ALV-UjUmlUVqVFgHIoYdae0Rn3dj9-3XiMpdBgkK-oOQA5FL8Y3KBYw4A5Di8C8twwlX-4Raw3QzstGz9wHjiW8JcVSkIsOkxfLl65iveL8wvWN31pGJ_jzqC76lfgCE2fnkVkPktTxlnvXCXG2lhbKd1nUUwoxwCYNJH2lXC9Hjl9PYN-QK4uU1Ay3e6GvErOA-oaqv4TyxImofZdzB4pDBFt3QfzNUsCMqpw-FSYXey1vqW05wBWiew-0JxdCD4iOjMXo7YeyvL_tdSHFn_wfPP6vP69kjz6-XFOnxFPg1lHafPCC4dQ_aKxIO7Ss_J5sg0JyRJITxlv62XSn4cQVsiFWlPBKmP_mNfEv04DyQbdkoF3FYpxtpbez7qCKlal1eCbCLkK6bW2UtYRnNgci8DotRnFvCz7ZAkvwO7aJSQUmfYvo60iJ8X2bpCS66extsqnxp3sd3HKki0-gbWBhu6-hyNiQ47XlULpGJaVH1_jASvgzQY49OAxaa22-yx_hp4cu8_SsALSNNFx-qQ6UlHrunh8kz5WBdhvjtxwvB_N6LE2-16JZb0o_DcJcmWLXGi9RFLYSn3JLpu4cm5nx8yVT9v_yrxHwn3W5CxfYzerUISfaiBx_s373JHVO0NkbhCBawHS_PAXsYb6v_ULEon7Vh6BCLxfAQhiG2mGVDpA_1c-wpJsp9qBY97GYIMXG4Uhi8L-I4d7HSx4zajwmwOtsPg9RpETnYuSu0ARluE8hoaUOmLKVel0qH4AvMH8D4UvoyMm8tFQcOJ19kimJRmPygTE3IqzHlB4zwGElQ2-IdbbwwV6qqJE3bSTr_II3N2QuFLmnA37jVFhlCi2Mc4u-7-cI2XfnQ-vZ_B9vU_1iTKAtD6wBYoDt03yzdoxVj2zahEnhfauHk41gXrcYNa7oz9SgjeWNrWd-NZhqaxons-JO1YmBs-eohCBx6suArcr49sswa3ERAzz2VqZsTZ7xpBxIm=s96-c-rg-br100" alt="avatar-github" className="avatar-github" />
          <Typography variant="body2" color="white" align="center">
            {tab}Profe Tachi
          </Typography>
        </Box>
        <Typography variant="body2" color="white" align="center">
          &copy; <span>{currentYear}</span> Todos los derechos reservados.
          <Link href="https://github.com/AxMar1221" target="_blank" rel="noopener noreferrer" sx={{ marginLeft: 1 }}>
            <IconButton sx={{ color: 'white'}} arial-label="GitHub">
              <GitHub />
            </IconButton>
          </Link>
          <Link href="https://wa.me/522222592173?text=Hola%20Tachi%20quiero%20ponerme%20en%20contacto%20contigo" target="_blank" rel="noopener noreferrer" sx={{ marginLeft: 1 }}>
            <IconButton sx={{ color: 'white'}} arial-label="WhatsApp">
              <WhatsApp />
            </IconButton>
          </Link>
        </Typography>
      </Box>
    </div>
  )
}
