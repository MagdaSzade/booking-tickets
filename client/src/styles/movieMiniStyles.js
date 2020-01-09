function movieMiniStyles() {
    return (
        theme => ({
    movieContent: {
        width: "95%",
        borderBottom: '4px dashed #FFC53D',
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
        padding: '35px',
        justifyContent: 'space-evenly'
    },
    buttonBox: {
        alignItems: 'right',
    },
    image: {
        width: '250px',
        objectFit: 'contain',

    },
    headerText:
    {      margin:'0px 0px 15px 15px', color: 'white', width: '500px'
    },
    text: {
        maxWidth: '80%',
        margin: '10px',
        color: '#d8d8d8',
    },
    textND: {
        margin: '30px',
        color: '#FFC53D',
        fontWeight: 'bold',
        
    },
    button: {
        margin: '30px 30px 30px 30px',
        textAlign: 'center',
        fontSize: '24px',
        background: '#0097a7',
        borderRadius: 10,
        boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
        color: '#FFC53D',
        height: 90,
        width: 170,
        padding: '0 20px',
    },
    time: {
        alignItems: 'center',
        position: "relative",
        margin: '30px',
        height: 20,
        display: 'flex',
    }
})
)
}

export default movieMiniStyles;