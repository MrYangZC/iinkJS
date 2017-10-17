pipeline {
    agent any

    environment {
        PROJECTNAME = 'myscriptjs master'
        PROJECT_DIR = '/dockervolumes/webcomponents/master/jenkins/workspace/myscript-js.job'
        PROJECTHOME = '/tmp/myscriptjs'
        SELENIUM_ENV = 'chrome'
        MAKE_ARGS=" PROJECT_DIR=${env.PROJECT_DIR} HOME=${env.PROJECTHOME} SELENIUM_ENV=${env.SELENIUM_ENV} BUILDID=${env.BUILD_NUMBER} "
    }

    stages {
      stage ('Checkout'){
        steps {
          git credentialsId: "build", url: 'https://scm.corp.myscript.com/scm/ws/myscriptjs.git', branch: 'master'
        }
      }

      stage ('purge'){
        steps {
          sh "make BUILDID=${env.MAKE_ARGS} purge"
        }
      }

      stage ('prepare'){
        steps {
          sh "make BUILDID=${env.MAKE_ARGS} prepare"
        }
      }

      stage ('build'){
        steps {
          sh "make BUILDID=${env.MAKE_ARGS} build"
        }
      }

      stage ('test'){
        steps {
          sh "make BUILDID=${env.MAKE_ARGS} test"
        }
      }

      stage ('docs'){
        steps {
          sh "make BUILDID=${env.MAKE_ARGS} docs"
        }
      }
    }

    post {
        always {
             sh "make BUILDID=${env.BUILD_NUMBER} killdocker"
        }

        success {
            slackSend color: "good", message: "${env.PROJECTNAME}: Build success ${env.JOB_NAME} ${env.BUILD_NUMBER}."
        }
        unstable {
            slackSend color: "warning", message: "${env.PROJECTNAME}: Unstable build, ${currentBuild.fullDisplayName} is unstable"
        }
        failure {
            slackSend color: "danger", message: "@group ${env.PROJECTNAME}: FAILURE, ${currentBuild.fullDisplayName} failed see there ${env.BUILD_URL}"
        }
        /* changed {
            slackSend color: "good", message: "${env.PROJECTNAME}: Build changed"
        }*/
    }
}