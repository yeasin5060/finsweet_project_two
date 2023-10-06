tailwind.config = {
    theme: {
      extend: {
        colors: {
          'navbg': '#0D0D0D',
          'maincolor':'#161722',
          'submaincolor':'#FFF',
          'bgcolor':'#FFD2A4',
          'churchbg':'#F5F2F0',
          'footcolor':'#161722'
        },
        maxWidth: {
          'container':'1280px',
        },
        fontFamily: {
          'Roboto_Condensed':"'Roboto Condensed' sans-serif;"
        },
        backgroundImage: {
          'banner': "url('images/image_bg_one.jpg')",
          'minibg1': "url('images/image1.png')",
          'minibg2': "url('images/image2.png')",
          'minibg3': "url('images/image3.png')",
          'minibg4': "url('images/image4.png')",
          'linear':'linear-gradient(45deg,rgba(6, 6, 6, 1),rgba(0, 0, 0, 0.02))',
          'churchbg': "url('images/image_bg_three.jpg')",
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
          'boxp':'48px 32px'
        }
      }
    }
  }