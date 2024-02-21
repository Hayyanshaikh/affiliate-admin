import React from 'react';
import * as Icons from "react-icons/tb";
import Websites from '../../api/Websites.json';
import Badge from '../../../components/comman/Badge.jsx';
import Button from '../../../components/comman/Button.jsx';
import {Link} from 'react-router-dom'

const Website = () => {
	return (
		<div className="website profile_item">
      <div className="profile_head">
        <div>
        	<h2 className="sub_heading">website</h2>
      	  <small>Set Up Your website</small>
        </div>
        <Button>
        	<Icons.TbPlus/>
        	<span>Add</span>
        </Button>
      </div>
      <div className="table_responsive">
	      <table>
	        <thead>
	          <tr>
						  <th>Name</th>
						  <th>Type</th>
						  <th>Category</th>
						  <th>Last Updated</th>
						  <th>Status</th>
						  <th>Action</th>
						</tr>
	        </thead>
	        <tbody>
	          {Websites.map((website) => (
	            <tr key={website.id}>
	              <td>
	              	<Link target="_blank" title={website.name} to={website.link}>{website.name}</Link>
	              </td>
	              <td>{website.type}</td>
	              <td>
	              	<span title={website.categories}>
	              		{
		              		website.categories.map((category, key)=>(
		              			<span key={key}>{category}, </span>
		              		))
		              	}
	              	</span>
	              </td>
	              <td>{website.lastUpdated}</td>
	              <td>
	              	<Badge 
	              		label={website.status}
	              		variant={
								      website.status.toLowerCase() === "active"
								        ? "primary"
								        : website.status.toLowerCase() === "inactive"
								        ? "danger"
								        : "fill"
								    }
	              	/>
	              </td>
	              <td>
	                <Button>Edit</Button>
	              </td>
	            </tr>
	          ))}
	        </tbody>
	      </table>
	    </div>
		</div>
	)
}

export default Website