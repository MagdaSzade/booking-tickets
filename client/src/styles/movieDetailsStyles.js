function movieDetailsStyles() {
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
        left: '15%',  
        right: '15%',  
        top: '15%',  
        bottom: '15%',  
        margin: '20px',  
        padding: '20px 20px',
        borderRadius: '15px',  
        background: 'lightgrey',
        color: '#212121',
        hight: '100%',
        overflowY: 'scroll',
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
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    button: {
        textAlign: 'center',
        position: 'absolute',
        right: '30px',
        background: '#006064',
        borderRadius: 2,
        boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
        color: '#FFC53D',
        height: '60px',
        width: '120px',
        fontSize: '16px',
        margin: "40px",
        align: 'right'
    }
})
)
}

export default movieDetailsStyles;