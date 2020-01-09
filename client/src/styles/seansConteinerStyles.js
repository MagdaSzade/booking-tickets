function seansConteinerStyles() {
    return (
        theme => ({
            container:{
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                background: 'rgba(10, 105, 135, 0.2)',
            },
            screen: {
                width: '96%',
                borderBottom: '4px dashed #FFC53D',
                textAlign: 'center',
                padding: '10px',
                marginBottom: '15px'                
            },
            grid: {
                width: "100%",
                display: 'grid',
                gridGap: '20px 20px ',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                padding: '3px',
                justifyItems: 'center',
            },
            placeNotBooked: {
                backgroundColor: 'green',
                border: 'solid 1px black'
            },
            placeReserved: {
                backgroundColor: 'blue',
                border: 'solid 1px black'
            },
            placeBooked: {
                backgroundColor: 'red',
                border: 'solid 1px black'
            },
            button: {
                textAlign: 'center',
                position: "relative",
                background: '#006064',
                borderRadius: 2,
                width: '250px',
                boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
                color: 'white',
                padding: '10px 70px',
                margin: "30px",
                marginLeft: "70px",
            }
        })
    )
}

export default seansConteinerStyles;