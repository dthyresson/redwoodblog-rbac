import StackedLayout from 'src/layouts/StackedLayout'

const AboutPage = () => {
  return (
    <StackedLayout>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <p className="prose prose-lg">
            This site was created to demonstrate my mastery of Redwood: Look on
            my works, ye mighty, and despair!
          </p>
        </div>
      </div>
    </StackedLayout>
  )
}

export default AboutPage
