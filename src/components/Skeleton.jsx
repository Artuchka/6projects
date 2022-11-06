import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
	<ContentLoader
		speed={1}
		width={400}
		height={160}
		viewBox="0 0 400 160"
		backgroundColor="#cc6228"
		foregroundColor="#8185a2"
		{...props}
	>
		<rect x="54" y="16" rx="3" ry="3" width="88" height="6" />
		<rect x="53" y="35" rx="3" ry="3" width="52" height="6" />
		<rect x="154" y="15" rx="3" ry="3" width="28" height="28" />
		<rect x="461" y="225" rx="3" ry="3" width="178" height="6" />
		<circle cx="25" cy="26" r="20" />
	</ContentLoader>
)

export default Skeleton
