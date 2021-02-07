import React, { Component } from 'react';
import Images from './Gallery/Images';
import Image_source from './Gallery/Image_source';
import { img_paths } from './Gallery/Image_source';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Images: []
        }

        this.animmation_in_progress = false;
    }

    componentDidMount() {
        let new_images = [];
        let center = {
            x: parseFloat(this.home.style.width) / 2,
            y: parseFloat(this.home.style.height) / 2
        }
        let total_images = 9;
        let center_image = Math.floor(total_images / 2);
        let new_x = 0;
        let new_y = 0;
        let new_zIndex = 0;
        let new_scale = 1;

        for (let i = 0; i < 9; i++) {
            if (i < center_image) {
                new_x = center.x - (300 * (center_image - i));
                new_y = center.y

                new_x = new_x + ((0.333 * 300) * (center_image - i))
                new_zIndex = i;
                new_scale = Math.pow(0.90, (center_image - i));

            } else {
                new_x = center.x + (300 * (i - center_image));
                new_y = center.y
                new_x = new_x - ((0.333 * 300) * (i - center_image))

                new_zIndex = i * (-1.0);

                new_scale = Math.pow(0.90, (i - center_image));
            }

            new_images.push(
                <Images color={colors[i]}
                    x={new_x}
                    y={new_y}
                    z_index={i === center_image ? 100 : new_zIndex}
                    scale={new_scale}
                    Images={img_paths[i]}
                />

            )
            console.log(new_images)
        }
        this.setState({ Images: new_images })
    }

    handle_next = () => {
        if (!this.animmation_in_progress) {

            this.animmation_in_progress = true;
            let last_image_left = this.home.children[this.home.children.length - 1].style.left;
            let last_image_zIndex = this.home.children[this.home.children.length - 1].style.zIndex;
            let last_image_transform = this.home.children[this.home.children.length - 1].style.transform;

            for (let i = this.home.children.length - 1; i > 0; i--) {
                this.home.children[i].style.transitionDuration = '1.0s';
                this.home.children[i].style.left = this.home.children[i - 1].style.left;
                this.home.children[i].style.zIndex = this.home.children[i - 1].style.zIndex;
                this.home.children[i].style.transform = this.home.children[i - 1].style.transform;
            }

            this.home.children[0].style.transitionDuration = '0.2s';
            this.home.children[0].style.transform = `translate(-50%,-50%) scale(0)`;

            setTimeout(() => {
                this.home.children[0].style.transitionDuration = '0.0s';
                this.home.children[0].style.left = last_image_left
                this.home.children[0].style.zIndex = last_image_zIndex;
                this.home.appendChild(this.home.children[0])

                setTimeout(() => {
                    this.home.children[this.home.children.length - 1].style.transitionDuration = '0.2s';
                    this.home.children[this.home.children.length - 1].style.transform = last_image_transform;
                    this.animmation_in_progress = false;
                }, 100)

            }, 500);
        } else {
            return;
        }

    }

    handle_previous = () => {

        if (!this.animmation_in_progress) {

            this.animmation_in_progress = true;
            let first_image_left = this.home.children[0].style.left;
            let first_image_zIndex = this.home.children[0].style.zIndex;
            let first_image_transform = this.home.children[0].style.transform;

            for (let i = 0; i < this.home.children.length - 1; i++) {
                this.home.children[i].style.transitionDuration = '1.0s';
                this.home.children[i].style.left = this.home.children[i + 1].style.left;
                this.home.children[i].style.zIndex = this.home.children[i + 1].style.zIndex;
                this.home.children[i].style.transform = this.home.children[i + 1].style.transform;
            }

            this.home.children[this.home.children.length - 1].style.transitionDuration = '0.2s';
            this.home.children[this.home.children.length - 1].style.transform = `translate(-50%,-50%) scale(0)`;

            setTimeout(() => {
                this.home.children[this.home.children.length - 1].style.transitionDuration = '0.0s';
                this.home.children[this.home.children.length - 1].style.left = first_image_left
                this.home.children[this.home.children.length - 1].style.zIndex = first_image_zIndex;

                this.home.insertBefore(this.home.children[this.home.children.length - 1], this.home.children[0])

                setTimeout(() => {
                    this.home.children[0].style.transitionDuration = '0.2s';
                    this.home.children[0].style.transform = first_image_transform;
                    this.animmation_in_progress = false;
                }, 100)

            }, 500);
        } else {
            return;
        }

    }

    render() {
        return (
            <div>
                <div ref={ref_id => this.home = ref_id} style={styles.home}>
                    {this.state.Images}
                </div>
                <FastRewindIcon fontSisze='large' color='primary' style={styles.left_arrow} onClick={this.handle_previous} />
                <FastForwardIcon fontSize='large' color='primary' style={styles.right_arrow} onClick={this.handle_next} />
                <div>
                    <img src="https://res.cloudinary.com/fullmoon/image/upload/v1612671862/BL_logo_nuwqkf.png" height="100" width="200" style={styles.logo}/>
                </div>

                <div style={styles.left_box}>
                     <div>
                      <img src="https://res.cloudinary.com/fullmoon/image/upload/v1612666448/Image_5_y8nktp.jpg" height="300" width="300"/>
                      </div>
                      <div>
                          hello
                      </div>

                  
                  </div>
                <div style={styles.right_box}>
                 Right world
                 
                </div>
            <div style={styles.bottom}>
              Connect with us for the latest promotion and recipes
              <FacebookIcon onClick={event =>  window.location.href='https://www.facebook.com/Baking-Language-1472693163005638/'} style={{margin: "3px 30px 0px 30px"}}/>
              <InstagramIcon onClick={event =>  window.location.href='https://www.instagram.com/bakinglanguage/'}/>
              
            </div>

            </div>
        )

    }// end of render
}

const colors = [
    'red',
    'yellow',
    'green',
    'white',
    'orange',
    'purple',
    'pink',
    'brown',
    'cyan'
]

const styles = {
    home: {
        position: 'absolute',
        top: "5%",
        left: "50%",
        transform: 'translate(-50%,50%)',
        height: '300px',
        width: '300px',
        backgroundColor: 'green'
    },
    logo:{
         position: 'absolute',
         top : "5px",
         left: "830px"

    },

    left_arrow: {
        position: 'absolute',
        top: "9%",
        left: "37%",
        transform: 'translate(-50%,50%)',
        height: '40px',
        width: '40px',

    },
    right_arrow: {
        position: 'absolute',
        top: "9%",
        left: "64%",
        transform: 'translate(-50%,50%)',
        height: '40px',
        width: '40px',
    },
    left_box: {
        position: 'absolute',
        top: "585px",
        left: "425px",
        display: "inline-block",
    
        height: '300px',
        width: '500px',
        border: '2px solid black',
        boxSizing: 'border-box',
    },
    right_box: {
        position: 'absolute',
        top: "80%",
        left: "71%",
        transform: 'translate(-50%,-50%)',
        height: '270px',
        width: '800px',
        // border: '2px solid black',
        boxSizing: 'border-box',
        border: '2px solid black',
    },
     bottom: {
        position: 'absolute',
        top: "97%",
        left: "50%",
        transform: 'translate(-50%,-50%)',
        height: '30px',
        width: '1900px', 
        backgroundColor : 'pink'
    }
}

export default Home