pipeline {

  environment {
    registry = "majortom327/docgen"
    registryCredential = 'dockerhub'
  }
  agent any
  stages {
    stage('Build image') {
      steps {
        sh 'docker build -t docgen .'
      }
    }

    stage('Publish image') {
      steps {
        sh '''#docker tag docgen:latest majortom327/docgen:latest
#docker push majortom327/docgen:latest'''
      }
    }

  }
}

pipeline {
  environment {
    registry = "gustavoapolinario/docker-test"
    registryCredential = ‘dockerhub’
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/gustavoapolinario/microservices-node-example-todo-frontend.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}