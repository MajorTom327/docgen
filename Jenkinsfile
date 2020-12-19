pipeline {

  environment {
    registry = "majortom327/docgen"
    registryCredential = 'dockerhub'
  }
  agent any
  stages {
    stage('Build image') {
      steps {
        docker.build registry + ":$BUILD_NUMBER"
      }
    }

    stage('Publish image') {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('cleanup docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}

