import React, {Component} from 'react';
import {Link} from "react-router-dom";

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.firstname}
                </td>
                <td>
                    {this.props.obj.lastname}
                </td>
                <td>
                    {this.props.obj.data.rank}
                </td>
                <td>
                    <Link to={"/players/" + this.props.obj.id} className="btn btn-primary">Details</Link>
                </td>
            </tr>
        );
    }
}

export default TableRow;
