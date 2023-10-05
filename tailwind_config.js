tailwind.config = {
    theme: {
      extend: {
        colors: {
          'navbg': '#0D0D0D',
          'maincolor':'#161722',
          'submaincolor':'#FFF',
          'bgcolor':'#FFD2A4'
        },
        maxWidth: {
          'container':'1280px',
        },
        fontFamily: {
          'Roboto_Condensed':"'Roboto Condensed' sans-serif;"
        },
        backgroundImage: {
          'banner': "url('images/image_bg_one.jpg')",
        },
        fontWeight: {
          thin: '100',
          hairline: '100',
          extralight: '200',
          light: '300',
          normal: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
          extrabold: '800',
          'extra-bold': '800',
          black: '900',
        },
        spacing: {
          'box': '80px 0 64px 80px',
        }
      }
    }
  }