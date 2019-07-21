workflow "build & deploy" {
  resolves = ["gcloud deploy"]
  on = "push"
}

action "filter master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "install node_modules" {
  uses = "nuxt/actions-yarn@master"
  needs = ["filter master"]
  args = "install"
}

action "build static files" {
  uses = "nuxt/actions-yarn@master"
  needs = ["install node_modules"]
  args = "build"
}

action "gcloud auth" {
  uses = "actions/gcloud/auth@master"
  secrets = ["GCLOUD_AUTH"]
  needs = ["build static files"]
}

action "gcloud deploy" {
  uses = "actions/gcloud/cli@master"
  needs = ["gcloud auth"]
  runs = "gcloud app deploy --project=lunch-eat-what-good"
}
