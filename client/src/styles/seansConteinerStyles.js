function seansConteinerStyles() {
    return (
        theme => ({
            screen: {
                width: '80%',
                border: '1px solid black',
                textAlign: 'center',
                padding: '10px',
                marginBottom: '15px'                
            },
            grid: {
                width: "50%",
                display: 'grid',
                gridGap: '5px 5px',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            },
            placeNotBooked: {
                backgroundColor: 'green',
                border: 'solid 1px black'
            },
            placeBooked: {
                backgroundColor: 'red',
                border: 'solid 1px black'
            }
        })
    )
}

export default seansConteinerStyles;