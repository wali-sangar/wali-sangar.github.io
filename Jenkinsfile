pipeline {
  agent any
  stages {
    stage('test') {
      step {
        echo 'testing'
      }
    }
    
    stage('build') {
      step {
        echo 'building'
      }
    }
    
  }
  post {
    always {
      echo 'post block executed'
    }
    
    failure {
      echo 'failure blocked executed'
    }
  }
}
