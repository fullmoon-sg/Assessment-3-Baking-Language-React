import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import FeedbackContext from "../context/FeedbackContext"
import Feedback from './Feedback/Feedback'


export default function Feedbacks() {
    
const context = useContext(FeedbackContext)

const getFeedbackCard = feedbackParams => {
    return(
        <Grid item xs={12} sm={4}>
            <Feedback {...feedbackParams}/>
        </Grid>
    );
};

return(
    <Grid container spacing = {4}>
        {context.feedbacks.map(feedbackParams => getFeedbackCard(feedbackParams))}
    </Grid>
)

}
