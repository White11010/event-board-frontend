import React from 'react';
import {useParams} from 'react-router';

const Event = () => {
	const {id} = useParams();

	return (
		<div>
			Event page with id {id}
		</div>
	);
};

export default Event;