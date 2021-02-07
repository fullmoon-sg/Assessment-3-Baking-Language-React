import React from 'react'

function Images(props) {
    return (
        <div style = {{
        ...styles.images, 
        backgroundColor : props.color,
        left : `${props.x}px`,
        top : `${props.y}px`,
        zIndex : props.z_index,
        transform : `translate(-50%,-50%) scale(${props.scale})`
        }}>
            
        <img style={styles.image} src={props.Images} alt="slicer images missiing"></img> 
        </div>
    )
}

const styles = {
    images: {
        position: 'absolute',
        top: "10%",
        left: "50%",
        transform: 'translate(-50%,-50%)',
        height: '450px',
        width: '600px',
        // border: '2px solid black',
        boxSizing : 'border-box',
        backgroundColor : 'red'
    },
    image: {
        width: '100%',
        height: '100%',
        boxShadow : '10px 10px 9px black'
    }
}

export default React.memo(Images)