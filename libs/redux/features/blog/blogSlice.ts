import { BlogContent, Blogs } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Blogs = {
	blogs: [
		{
			id: '1232',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: '123sdfds',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: '123asdfd',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: '123rtj',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: '12gbd',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: '123dfgdf',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: '123gggsd',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: 'bbcv123',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: '12sdfg3',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: '123sdfgsdf',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: '12dfg3',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: 'dfghg123',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: '123sdfgsdf',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
		{
			id: '123iuy',
			title: `Revolutionizing Factory Inspection: BnK's Journey into Japan's Smart Factory Landscape`,
			image:
				'https://bnksolution.com/assets/up_load/news/380423185_661230382774628_5742777397925732602_n.jpg',
			date: '2022-01-01',
			content: [
				{
					subTitle: 'Introduction:',
					subDescription:
						'In a bold leap toward the future of manufacturing, BnK proudly unveils its latest venture in Japan, promising to redefine the landscape of factory inspections. This groundbreaking project is set to transform the traditional approach to quality control and monitoring, ushering in an era of remote inspections powered by cutting-edge virtual reality (VR) technology and 360-degree cameras. Through this innovative solution, BnK eliminates the need for physical on-site visits, allowing stakeholders to access real-time factory floor status anywhere in the world.',
				},
				{
					subTitle: 'The Technological Marvel:',
					subDescription: `At the heart of this transformative project lies the seamless integration of state-of-the-art technologies. Leveraging the power of virtual reality, BnK processes video and audio data on a cloud-based platform, replicating the on-site experience with astonishing accuracy. The project's cornerstone platform is Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to deploy microservices, ensuring a smooth and reliable user experience.

BnK has collaborated with Wowza, a leading streaming technology provider, to address the critical latency issue. By incorporating WebRTC technology, the project achieves delays of less than 1 second, ensuring that stakeholders receive real-time updates and insights, enhancing the overall effectiveness of remote inspections.`,
				},
				{
					subTitle: 'The Customer Experience:',
					subDescription: `The response from customers has been overwhelmingly positive, opening up new avenues for BnK in the dynamic Japanese Smart Factory market. The ability to conduct remote inspections has streamlined operations and demonstrated the potential for significant cost savings. Customers express satisfaction with the real-time insights and the convenience afforded by the mobile app, emphasizing the success of BnK's foray into the convergence of reality and virtuality.`,
				},
				{
					subTitle: 'Future Prospects:',
					subDescription: `The success of BnK's venture in Japan has solidified its position in the market and sparked interest in exploring additional features and collaborations. The expressed enthusiasm from stakeholders indicates a positive outlook for future endeavors in the region. BnK is poised to play a pivotal role in shaping the future of manufacturing, with an eye on continuous innovation and adaptation to emerging technologies.`,
				},
				{
					subTitle: 'Conclusion:',
					subDescription: `As BnK pioneers the convergence of reality and virtuality in the manufacturing industry, the venture into remote factory inspections in Japan is a testament to technology's transformative power. The success achieved so far is a stepping stone towards a future where geographical constraints are no longer barriers to efficient and effective quality control. Join us on this exciting journey as we redefine the norms of factory inspections, setting new standards for the Smart Factory landscape in Japan and beyond.`,
				},
			],
		},
	],
}

export const blogsSlice = createSlice({
	name: 'blogs',
	initialState,
	reducers: {
		addBlog: (state, action) => {
			const content: BlogContent[] = []
			for (const key in action.payload) {
				if (key.startsWith('subTitle') && action.payload[key]) {
					const index = key.replace('subTitle', '')
					const descriptionKey = `subDescription${index}`
					const contentItem: BlogContent = {
						subTitle: action.payload[key],
						subDescription: action.payload[descriptionKey] || '',
					}
					content.push(contentItem)
				}
			}

			const resultObject = {
				id: action.payload.id,
				title: action.payload.title,
				image: action.payload.image,
				date: new Date(action.payload.date).toISOString().split('T')[0],
				content: content,
			}
			state.blogs.push(resultObject)
		},
	},
})
export const { addBlog } = blogsSlice.actions
// export const selectBlogs = (state: RootState) => state.blogs.blogs
export default blogsSlice.reducer
