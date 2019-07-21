workflow "Build and deploy on push" {
  resolves = ["GitHub Action for Google Cloud"]
  on = "push"
}

action "Filter Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Install node_modules" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Filter Master"]
  args = "install"
}

action "Build Static Assets" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install node_modules"]
  args = "build"
}

action "GitHub Action for Google Cloud SDK auth" {
  uses = "actions/gcloud/auth@master"
  needs = ["Build Static Assets"]
  secrets = ["GCLOUD_AUTH"]
}

action "GitHub Action for Google Cloud" {
  uses = "actions/gcloud/cli@master"
  needs = ["GitHub Action for Google Cloud SDK auth"]
  runs = "gcloud app deploy — project=lunch-eat-where-good"
}
