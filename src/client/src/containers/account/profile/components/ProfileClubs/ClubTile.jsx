import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';






const ClubTile = props => (
    
    
            <div>
                <Card>
                    <CardBody className="dashboard__card-widget">
                        <Divider />
                        <div className="card__title">
                            <h3 className="bold-text">{ props.clubName }</h3>
                        </div>
                        <div>
                            <h5>Category: { props.clubCategory }</h5>
                            <h5>Contact Info: <a href={"mailto:" + props.clubEmail}>{ props.clubEmail }</a></h5>
                            <h5>More Info: <a href={ props.myBAR }>{ props.myBAR }</a></h5>
                            <h6>{ props.clubDescription }</h6>
                            <button 
                                className="btn btn-primary account__btn"
                                style={{width: "15%", marginTop: "15px"}} 
                            >
                                Remove
                            </button>
                        </div>
                    </CardBody>
                </Card>
            </div>
);



ClubTile.propTypes = {
    key: PropTypes.string,
    clubName: PropTypes.string,
    clubCategory: PropTypes.string,
    clubEmail: PropTypes.string,
    clubDescription: PropTypes.string,
    myBAR: PropTypes.string,
    website: PropTypes.string,
    fb: PropTypes.string,
    ig: PropTypes.string

};

export default translate('common')(ClubTile);


/*
class ClubTile extends PureComponent {
    
    
    static proptypes = {
        clubName: PropTypes.string.isRequired,
        clubDescrip: PropTypes.string.isRequired,
    };
    

    constructor(props){
        super(props);
        this.state = {
            clubName: props.clubName,
            clubDescrip: props.clubDescrip,
            clubEmail: props.clubEmail,
            clubCategory: props.clubCategory
        };
    }

    render(){
        return (
            <Col md={12} xl={3} lg={6} xs={12} >
                <Card>
                    <CardBody className="dashboard__card-widget">
                        <div className="card__title">
                            <h2 className="bold-text">{ this.props.clubName }</h2>
                        </div>
                        <div>
                            <h5>Category: { this.props.clubCategory }</h5>
                            <h5>Contact Info: { this.props.clubEmail }</h5>
                            <h6>{ this.props.clubDescrip }</h6>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default translate('common')(ClubTile);
*/
