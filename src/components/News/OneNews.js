import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getOnePost } from '../../redux/actions/dataActions';
import { withStyles } from '@material-ui/core';
import Counter from '../About/Counter';
import Grid from '@material-ui/core/Grid';
import './News.css';
import dayjs from 'dayjs';

import ScheduleIcon from '@material-ui/icons/Schedule';

const styles = {}

class OneNews extends Component {
    state = {
        blog: {}
    }
    componentDidMount() {
        window.scrollTo(0,0);
        let id = this.props.match.params.newsId;
        this.props.getOnePost(id)
    }
    render() {
        const { data: { blog: { title, body, imageUrl, createdAt } } } = this.props

        return (
            <Grid container>
                <main className="page-head" style={{ width: '100%', margin: '0', position: 'static' }}>
                    <div className="container-fluid background"></div>
                    <div className="page-content" style={{ width: '70%' }}>
                        <div className="ntr-text" >
                            <h1 style={{fontWeight:'500'}}>{title}</h1>
                            <p style={{marginBottom:'-20px'}}><span><ScheduleIcon style={{marginRight:'5px',color:'rgb(9, 83, 88)'}} /></span>{dayjs(createdAt).format('MMMM D, YYYY')}</p>
                            <br />
                            <br />
                            <Counter />
                            <hr style={{ marginTop: '-15px' }} />
                            <div className="blog_image">
                                <img src={imageUrl} className="img-responsive post_img" alt="post image" />
                            </div>
                            <div className="blog_text">
                                <p>{body}</p>
                            </div>
                        </div>
                    </div>
                </main>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
    UI: state.UI
})
export default connect(mapStateToProps, { getOnePost })(withStyles(styles)(OneNews));

