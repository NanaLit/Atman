'use client';

import { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import RecommendationsAfoam from '@/components/afoamPage/RecommendationsAfoam/RecommendationsAfoam.jsx';
import AfoamSlider from '@/components/afoamPage/AfoamSlider/AfoamSlider.jsx';
import DescriptionAfoam from '@/components/afoamPage/DescriptionAfoam/DescriptionAfoam.jsx';
import AdvantagesAfoam from '@/components/afoamPage/AdvantagesAfoam/AdvantagesAfoam.jsx';
import { AfoamMaterials } from '@/components/afoamPage/AfoamMaterials/AfoamMaterials.jsx';
import { WhyСhooseAfoam } from '@/components/afoamPage/WhyСhooseAfoam/WhyСhooseAfoam.jsx';

export default function Afoam() {
	const [afoamData, setAfoamData] = useState([]);
	const [splitAfomData, setSplitAfoamData] = useState([]);
	const [content, setContent] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const blocks = (afoamData) => {
		let size = 4;
		let subarray = [];
		for (let i = 0; i < Math.ceil(afoamData.length / size); i++) {
			subarray[i] = afoamData.slice(i * size, i * size + size);
		}
		setSplitAfoamData(subarray);
	};

	const fetchData = async () => {
		try {
			const response = await axios.get(`${process.env.HOST}/api/afoam`);
			setAfoamData(response.data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useLayoutEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		blocks(afoamData);
		setContent(getAfoamContent(splitAfomData));
	}, [afoamData]);

	const recommended1 = afoamData;
	// const recommended2 = afoamData.recommended2;
	// const recommended3 = afoamData.recommended3;

	const advantages1 = afoamData[0]?.advantages;
	const advantages2 = afoamData[0]?.advantages;
	const advantages3 = afoamData[0]?.advantages;

	const getAfoamContent = () => {
		if (splitAfomData.length > 0) {
			splitAfomData.map((item) => {
				return (
					<>
						<h2>asdasd</h2>
						{/* <AdvantagesAfoam advantages={item} ></AdvantagesAfoam> */}
						{/* <RecommendationsAfoam recommended={item}></RecommendationsAfoam> */}
					</>
				);
			});
		}
	};

	return (
		<>
			<>
				<AfoamSlider></AfoamSlider>
				<DescriptionAfoam></DescriptionAfoam>
				<AdvantagesAfoam></AdvantagesAfoam>
				<RecommendationsAfoam></RecommendationsAfoam>
				<AfoamMaterials />
				<WhyСhooseAfoam />
			</>
		</>
	);
}
