import React from "react";
import "./Sidebar.css";
import {
	HomeOutlined as HomeOutlinedIcon,
	// Home as HomeIcon,
	ExploreOutlined as ExploreOutlinedIcon,
	// Explore as ExploreIcon,
	SubscriptionsOutlined as SubscriptionsOutlinedIcon,
	// Subscriptions as SubscriptionsIcon,
	VideoLibraryOutlined as VideoLibraryOutlinedIcon,
	// VideoLibrary as VideoLibraryIcon,
	HistoryOutlined as HistoryOutlinedIcon,
	// History as HistoryIcon,
	OndemandVideoOutlined as OndemandVideoOutlinedIcon,
	// OndemandVideo as OndemandVideoIcon,
	ScheduleOutlined as ScheduleOutlinedIcon,
	// Schedule as ScheduleIcon,
	ThumbUpOutlined as ThumbUpOutlinedIcon,
	// ThumbUp as ThumbUpIcon,
	SportsEsportsOutlined as SportsEsportsOutlinedIcon,
	// SportsEsports as SportsEsportsIcon,
	SettingsOutlined as SettingsOutlinedIcon,
	// Settings as SettingsIcon,
	FlagOutlined as FlagOutlinedIcon,
	// Flag as FlagIcon,
	HelpOutlineOutlined as HelpOutlineOutlinedIcon,
	// Help as HelpIcon,
	FeedbackOutlined as FeedbackOutlinedIcon,
	// Feedback as FeedbackIcon
} from "@mui/icons-material";

import Avatar from "@mui/material/Avatar";

function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="sidebar__section">
				<div className="sidebar__list-item">
					<HomeOutlinedIcon className="sidebar__icon" />
					<h4>Home</h4>
				</div>
				<div className="sidebar__list-item">
					<ExploreOutlinedIcon className="sidebar__icon" />
					<h4>Explore</h4>
				</div>
				<div className="sidebar__list-item">
					<SubscriptionsOutlinedIcon className="sidebar__icon" />
					<h4>Subscriptions</h4>
				</div>
			</div>
			<hr />
			<div className="sidebar__section">
				<div className="sidebar__list-item">
					<VideoLibraryOutlinedIcon className="sidebar__icon" />
					<h4>Library</h4>
				</div>
				<div className="sidebar__list-item">
					<HistoryOutlinedIcon className="sidebar__icon" />
					<h4>History</h4>
				</div>
				<div className="sidebar__list-item">
					<OndemandVideoOutlinedIcon className="sidebar__icon" />
					<h4>Your Videos</h4>
				</div>
				<div className="sidebar__list-item">
					<ScheduleOutlinedIcon className="sidebar__icon" />
					<h4>Watch Later</h4>
				</div>
				<div className="sidebar__list-item">
					<ThumbUpOutlinedIcon className="sidebar__icon" />
					<h4>Liked videos</h4>
				</div>
			</div>
			<hr />
			<div className="sidebar__section">
				<h4 className="sidebar__section-heading">Subscriptions</h4>

				<div className="sidebar__list-item">
					<Avatar
						className="sidebar__icon"
						alt="Remy Sharp"
						src="https://mui.com/static/images/avatar/2.jpg"
						sx={{ width: 24, height: 24 }}
					/>
					<h4>Library</h4>
				</div>
				<div className="sidebar__list-item">
					<Avatar
						className="sidebar__icon"
						alt="Remy Sharp"
						src="https://mui.com/static/images/avatar/2.jpg"
						sx={{ width: 24, height: 24 }}
					/>
					<h4>Library</h4>
				</div>
				<div className="sidebar__list-item">
					<Avatar
						className="sidebar__icon"
						alt="Remy Sharp"
						src="https://mui.com/static/images/avatar/2.jpg"
						sx={{ width: 24, height: 24 }}
					/>
					<h4>Library</h4>
				</div>
				<div className="sidebar__list-item">
					<Avatar
						className="sidebar__icon"
						alt="Remy Sharp"
						src="https://mui.com/static/images/avatar/2.jpg"
						sx={{ width: 24, height: 24 }}
					/>
					<h4>Library</h4>
				</div>
				<div className="sidebar__list-item">
					<Avatar
						className="sidebar__icon"
						alt="Remy Sharp"
						src="https://mui.com/static/images/avatar/2.jpg"
						sx={{ width: 24, height: 24 }}
					/>
					<h4>Library</h4>
				</div>
			</div>
			<hr />

			<div className="sidebar__section">
				<h4 className="sidebar__section-heading">MORE FROM YOUTUBE</h4>
				<div className="sidebar__list-item">
					<SportsEsportsOutlinedIcon className="sidebar__icon" />
					<h4>Gaming</h4>
				</div>
				<div className="sidebar__list-item">
					<ExploreOutlinedIcon className="sidebar__icon" />
					<h4>Live</h4>
				</div>
				<div className="sidebar__list-item">
					<SubscriptionsOutlinedIcon className="sidebar__icon" />
					<h4>Sports</h4>
				</div>
			</div>
			<hr />
			<div className="sidebar__section">
				<div className="sidebar__list-item">
					<SettingsOutlinedIcon className="sidebar__icon" />
					<h4>Settings</h4>
				</div>
				<div className="sidebar__list-item">
					<FlagOutlinedIcon className="sidebar__icon" />
					<h4>Report History</h4>
				</div>
				<div className="sidebar__list-item">
					<HelpOutlineOutlinedIcon className="sidebar__icon" />
					<h4>Help</h4>
				</div>
				<div className="sidebar__list-item">
					<FeedbackOutlinedIcon className="sidebar__icon" />
					<h4>Send Feedback</h4>
				</div>
			</div>
			<hr />
		</aside>
	);
}

export default Sidebar;
