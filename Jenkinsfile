pipeline {
  agent any
  parameters{
    choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'])
    booleanParam(name: 'executeTests', defaultValue: true, description: '' )
  }
  stages {
    stage('test') {
      steps {
        when {
          expression{
            parameters.executeTests
          }
        }
        echo 'testing application'
      }
    }
    
    stage('build') {
      steps {
        echo 'building application'
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
