import React from 'react';
import GroupsItemIndex from "./groups_index_item";

class GroupsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchUserInfo();
        this.props.fetchGroups();
    }

    render() {

        if (!this.props.inGroups) {
            return null;
        }

        let inGroups = this.props.inGroups.map( group => {
            return (
                <GroupsItemIndex group={group} key={group.id} member={group.leader_id}/>
            );
        })

        let suggestedGroups = this.props.suggestedGroups.map(group => {
            return (
                <GroupsItemIndex group={group} key={group.id} />
            );
        })

        let magnify = window.magnifyURL;
        
        return (
        <>
        <div className="index-body">
            <div className="c-page-lt">
                <div className="c-page-body">
                    <div className="unit-size5of7-full-width" >
                        <h2 className="myheader">YOUR GROUPS</h2>
                        <ul className="box-ul">
                            {inGroups}
                            <div className="clearfix"></div>
                        </ul>
                        <h2 className="myheader">SUGGESTED GROUPS</h2>
                        <ul className="box-ul">
                            {suggestedGroups}
                        </ul>
                        <button className="button--showmore" >Show more</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        );
    }
}


export default GroupsIndex;

