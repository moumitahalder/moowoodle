import { __ } from '@wordpress/i18n';

export default {
    id: "synchronize-user",
    priority: 10,
    name: __("User", 'moowoodle'),
    desc: __("Admins can select user sync direction and schedule interval for user synchronization.", 'moowoodle'),
    icon: "font-mail",
    submitUrl: "save-moowoodle-setting",
    proDependent: true,
    modal: [
        {
            key: "user_sync_direction",
            type: "checkbox-default",
            // desc: __("<b>Prior to updating existing user info, you must select the user info to be synchronized at </b>", 'moowoodle') . $moowoodle_sync_setting_url . __("<br><br>While synchronizing user information, we use the email address as the unique identifier for each user. We check the username associated with that email address, and if we find the same username in the other instance but with a different email address, the user's information cannot be synchronized.", 'moowoodle'),
            label: __("Sync Direction", 'moowoodle'),
            options: [
                {
                    key: "wordpress_to_moodle",
                    label: __('Wordpress to Moodle', 'moowoodle'),
                    value: "wordpress_to_moodle",
                },
                {
                    key: "moodle_to_wordpress",
                    label: __('Moodle to Wordpress', 'moowoodle'),
                    value: "moodle_to_wordpress",
                }
            ],
            proSetting: true,
        },
        {
            key: "user_schedule_interval",
            type: "select",
            desc: __("Select Option For User Synchronization Schedule Interval.", 'moowoodle'),
            label: __("Schedule Interval", 'moowoodle'),
            options: [
                {
                    key: "realtime",
                    label: __("Realtime", 'moowoodle'),
                    value: "realtime",
                },
                {
                    key: "hour",
                    label: __("Hourly.", 'moowoodle'),
                    value: "hour",
                },
                {
                    key: "hour6",
                    label: __("Hour 6.", 'moowoodle'),
                    value: "hour6",
                },
                {
                    key: "day",
                    label: __("Daily", 'moowoodle'),
                    value: "day",
                },
                {
                    key: "week",
                    label: __("Weekly", 'moowoodle'),
                    value: "week",
                },
                {
                    key: "month",
                    label: __("Month", 'moowoodle'),
                    value: "month",
                }
            ],
            proSetting: true,
        },
        {
            key: "update_moodle_user",
            type: "checkbox",
            desc: __('If enabled, all moodle user\'s profile data (first name, last name, city, address, etc.) will be updated as per their wordpress profile data. Explicitly, for existing user, their data will be overwritten on moodle.', 'moowoodle'),
            label: __("Force Override Moodle User Profile", 'moowoodle'),
            options: [
                {
                    key: "update_moodle_user",
                    label:  __('Enable', 'moowoodle'), 
                    value: "update_moodle_user"
                }
            ]
        },
        {
            key: "sync-user-options",
            type: "checkbox-default",
            desc: __("Determine User Information to Synchronize in Moodle-WordPress User synchronization. Please be aware that this setting does not apply to newly created users.", 'moowoodle'),
            label: __("User Information", 'moowoodle'),
            select_deselect: true,
            options: [
                {
                    key: "sync_user_first_name",
                    label: __('First Name', 'moowoodle'),
                    value: "sync_user_first_name",
                },
                {
                    key: "sync_user_last_name",
                    label: __('Last Name', 'moowoodle'),
                    value: "sync_user_last_name",
                },
                {
                    key: "sync_username",
                    label: __('Username', 'moowoodle'),
                    value: "sync_username",
                },
                {
                    key: "sync_password",
                    label: __('Password', 'moowoodle'),
                    value: "sync_password",
                }
            ],
            proSetting: true,
        },
        {
            key: "sync_user_btn",
            type: "syncbutton",
            label: __("Sync user", 'moowoodle'),
        },
    ]
};