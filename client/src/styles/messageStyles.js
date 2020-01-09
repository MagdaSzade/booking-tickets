function messageStyles() {
    return (
        theme => ({
    popup: {  
        position: 'fixed',  
        width: '100%',
        height: '100%',  
        top: 0,  
        left: 0,  
        right: 0,  
        bottom: 0,  
        margin: 'auto',  
        backgroundColor: 'rgba(0,0,0, 0.5)',
        zIndex: '1',
      },  
      inner: {  
        position: 'absolute',  
        left: '25%',  
        right: '25%',  
        top: '25%',  
        bottom: '25%',  
        margin: 'auto',  
        padding: '20px 20px',
        borderRadius: '15px',  
        background: 'lightgrey',
        color: '#212121',
        hight: '100%',
      },
    image: {
        width: '100px',
        hight: 'auto'
    },
    box:{
        border: '2px solid #96bbc7',
        margin: "15px",
        padding: "10px",
        justifyContent: 'center',
    },
    display:{
        display: 'flex',
        justifyContent: 'center',
        color: 'black',
        fontWeight: 'bold',
        margin: "5px",
    },
    displayFlex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    button: {
        textAlign: 'center',
        position: "relative",
        background: '#006064',
        borderRadius: 2,
        boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
        color: '#FFC53D',
        height: 40,
        width: 100,
        margin: "5px",
    }
})
)
}

export default messageStyles;