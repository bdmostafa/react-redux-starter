import delay from './delay';

// Mocks a web API working with fake data
// Uses setTimeout to simulate the delay of an AJAX call
// Return promises

const courses = [
    {
        id: "react-redux",
        title: "A new react-redux App",
        srcUrl: "",
        authorId: "mostafa-golf",
        length: "4.75",
        category: "React"
    },
    {
        id: "vanilla-js",
        title: "A new Vanilla JS App",
        srcUrl: "",
        authorId: "mostafa-golf",
        length: "5.00",
        category: "JavaScript"
    },
    {
        id: "info-tech",
        title: "A new Journey to Information Technology",
        srcUrl: "",
        authorId: "mostafa-golf",
        length: "4.25",
        category: "IT"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = course => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                // Validate server-side
                const minCourseTitleLength = 5;
                if(course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if(course.id) {
                    const existingCourseIdx = courses.findIndex(c => c.id == course.id);
                    courses.splice(existingCourseIdx, 1, course);
                } else {
                    // Simulating creation, generating Ids
                    // cloning so copy returned is passed by value rather than reference
                    course.id = generateId(course);
                    course.srcUrl = `${course.id}`;
                    courses.push(course);
                }

                resolve(Object.assign({}, course));

            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const idxCourseToDeleted = courses.findIndex(course => {
                    course.id == courseId;
                });
                courses.splice(idxCourseToDeleted, 1);
                resolve();
            }, delay);
        });
    }
}

export default CourseApi;