pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        echo 'testing'
      }
    }
    
    stage('build') {
      steps {
        echo 'building'
      }
    }
    
  }
  post {
    always {
      echo 'post block executed'
    }
  }
}
