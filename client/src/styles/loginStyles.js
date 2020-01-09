function loginStyles() {
    return (
        theme => ({
            conteiner: {
                height: '160px',
                marginTop: '30px',
                background: 'rgba(10, 105, 135, 0.2)',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
            },
            conteiner2: {
              marginTop: '-40px',
              position: 'relative',
          },
            button: {
              textAlign: 'center',
              position: "absolute",
              background: '#006064',
              border: 'none',
              borderRadius: 2,
              boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
              color: '#FFC53D',
              height: 30,
              padding: '0 20px',
              left: '50%',
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              marginLeft: '-50px',
              marginTop: '10px',
            },
            label:{
                marginRight: '15px',
                marginBottom: '15px',
            },
            input:{
              marginBottom: '15px',
              background: 'none',
              border: 'none',
              borderBottom: '1px solid grey',
              color: '#FFF',
            },
})
)
}

export default loginStyles;

