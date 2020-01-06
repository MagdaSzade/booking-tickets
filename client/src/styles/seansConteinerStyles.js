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
                width: "50%",
                display: 'grid',
                gridGap: '20px 20px ',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            },
            seatStyle:
            {
                border: '3px solid #3A3A3A',
                padding: '10px',
                backgroundColor: '#006064',
                
            },
            placeNotBooked: {
                backgroundColor: 'green',
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
                width: '50px',
                boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
                color: 'white',
                padding: '10px 70px',
                margin: "30px",
            }
        })
    )
}

export default seansConteinerStyles;