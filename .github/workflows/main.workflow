workflow "Slack Notification." {
  resolves = ["Slack Notification"]
  on = "push"
}

action "Slack Notification" {
  uses = "actions/checkout@master"
  env = {
    SLACK_CHANNEL = "ambassabot-operations",
    SLACK_USERNAME = "Ambassabot",
    SLACK_ICON  = "https://ca.slack-edge.com/T2SHSRH42-UAT1XQ5FT-3c3b92d02ef8-192",
    SLACK_COLOR = "#3278BD"
    SLACK_TITLE = "Post Title",
    SLACK_MESSAGE = "Post Content :rocket:"
  }
  secrets = ["slack_secret"]
}
