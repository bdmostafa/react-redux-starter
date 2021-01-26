import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        // this.state = {
        //     course: { title: "" }
        // };

        // this.handleTitleChange = this.handleTitleChange.bind(this);
        // this.handleSave = this.handleSave.bind(this);
    }

    // handleTitleChange(e) {
    //     const course = this.state.course;
    //     course.title = e.target.value;
    //     this.setState({ course: course });
    // }

    // handleSave() {
    //     // alert(`You are saving ${this.state.course.title}`);
    //     // this.props.dispatch(courseActions.createCourse(this.state.course));
    //     this.props.actions.createCourse(this.state.course)
    // }

    courseRow(course, idx) {
        return <div key={idx} > {course.title} </div>;
    }

    render() {
        const { courses } = this.props;

        return (
            <div>
                <h1>Courses Page</h1>
                
                {/* {this.props.courses.map(this.courseRow)} */}
                <CourseList courses={courses} />

                {/* <h2>Add courses</h2>
                <input
                    type="text"
                    onChange={this.handleTitleChange}
                    value={this.state.course.title}
                />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.handleSave}
                /> */}
            </div>
        );
    }
}

CoursesPage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    // createCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // createCourse : course => dispatch(courseActions.createCourse(course));
        actions : bindActionCreators(courseActions, dispatch)
    };
};

// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);