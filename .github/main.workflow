workflow "Build and deploy on push" {
  resolves = ["gcloud deploy"]
  on = "push"
}

action "filter master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "install node_modules" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Filter Master"]
  args = "install"
}

action "build" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install node_modules"]
  args = "build"
}

action "gcloud auth" {
  uses = "actions/gcloud/auth@master"
  needs = ["build static files"]
  secrets = ["GCLOUD_AUTH"]
}

action "gcloud deploy" {
  uses = "actions/gcloud/cli@master"
  needs = ["gcloud auth"]
  runs = "gcloud app deploy — project=lunch-eat-what-good"
}
