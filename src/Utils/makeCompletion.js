const { responsesByModule } = require("./validResponses");

/**
 * Check the target list against a list of items to see if at least X number
 * of items are in the target
 * @param {Array} target The target list
 * @param {Array} items The list of items to search against
 * @param {Number} atLeast The lower bound of matches required
 * @returns {boolean} If the target contained at least X items
 */
let containsAtLeast = (target, items, atLeast) => {
    //Note: None of the data we're working with is repeatable, so this is fine
    items = new Set(items);

    let intersection = new Set(target.filter((x) => items.has(x)));

    return intersection.size >= atLeast;
};

let isConfident = (questions) => {
    for (let q of questions) {
        if (q < 5) return false;
    }
    return true;
};

let makeCompletion = (survey) => {
    let completion = {
        "module-1": {
            initialCompletion: 0,
            currentCompletion: 0,
        },
        "module-2": {
            initialCompletion: 0,
            currentCompletion: 0,
        },
        "module-3": {
            initialCompletion: 0,
            currentCompletion: 0,
        },
        "module-4": {
            initialCompletion: 0,
            currentCompletion: 0,
        },
        "module-5": {
            initialCompletion: 0,
            currentCompletion: 0,
        },
        "module-6": {
            initialCompletion: 0,
            currentCompletion: 0,
        },
        "module-7": {
            initialCompletion: 0,
            currentCompletion: 0,
        },
        "module-8": {
            initialCompletion: 0,
            currentCompletion: 0,
        },
        "module-9": {
            initialCompletion: 0,
            currentCompletion: 0,
        },
        "module-10": {
            initialCompletion: 0,
            currentCompletion: 0,
        },
        "module-11": {
            initialCompletion: 0,
            currentCompletion: 0,
        },
    };

    //This person is a god and as such does not need to learn
    {
        let isInterViewGod =
            containsAtLeast(
                [survey["question-8"]],
                responsesByModule.interviewGod.criteriaQ8,
                1
            ) &&
            containsAtLeast(
                [survey["question-9"]],
                responsesByModule.interviewGod.criteriaQ9,
                1
            );
        if (isInterViewGod) {
            completion["module-1"].initialCompletion = 100;
            completion["module-1"].currentCompletion = 100;
            completion["module-2"].initialCompletion = 100;
            completion["module-2"].currentCompletion = 100;
            completion["module-3"].initialCompletion = 100;
            completion["module-3"].currentCompletion = 100;
            completion["module-4"].initialCompletion = 100;
            completion["module-4"].currentCompletion = 100;
            completion["module-5"].initialCompletion = 100;
            completion["module-5"].currentCompletion = 100;
            completion["module-6"].initialCompletion = 100;
            completion["module-6"].currentCompletion = 100;
            completion["module-7"].initialCompletion = 100;
            completion["module-7"].currentCompletion = 100;
            completion["module-11"].initialCompletion = 100;
            completion["module-11"].currentCompletion = 100;

            return completion;
        }
    }

    
    //Shared Logic
    let hasExperience = containsAtLeast(
        survey["question-5"],
        responsesByModule.m1.criteriaQ5,
        2
    );

    let hasGreatExperience = containsAtLeast(
        survey["question-5"],
        responsesByModule.m1.criteriaQ5,
        4
    );

    let hasManyOffers =
        containsAtLeast(
            [survey["question-9"]],
            responsesByModule.m1.criteriaQ9,
            1
        )

    //Module 1
    {
        let score = 0;

        if (hasExperience) score += 40;
        if (hasGreatExperience) score += 30;
        if (hasManyOffers) score += 30;

        completion["module-1"].initialCompletion = score;
        completion["module-1"].currentCompletion = score;
    }
    //Module 2
    {
        let score = 0;
        let hasNetworked = containsAtLeast(
            survey["question-5"],
            responsesByModule.m2.criteriaQ5,
            3
        );
        let hasNetworkedWell = containsAtLeast(
            survey["question-5"],
            responsesByModule.m2.criteriaQ5,
            5
        );

        let isNetworkConfident = isConfident([
            survey["question-14-0"],
            survey["question-14-1"],
        ]);

        if (hasNetworked) score += 50;
        if (hasNetworkedWell) score += 20;
        if (isNetworkConfident) score += 30;

        completion["module-2"].initialCompletion = score;
        completion["module-2"].currentCompletion = score;
    }

    //Module 3
    {
        let score = 0;
        let hasResume = containsAtLeast(
            survey["question-5"],
            responsesByModule.m3.criteriaQ5,
            4
        );

        let isResumeConfident = isConfident([
            survey["question-13-0"],
            survey["question-13-1"],
            survey["question-13-2"],
        ]);

        if (hasResume) score += 40;
        if (isResumeConfident) score += 30;
        if (hasManyOffers) score += 30;

        completion["module-2"].initialCompletion = score;
        completion["module-2"].currentCompletion = score;
    }

    //Module 4
    {
        let score = 0;

        let isAppConfident = isConfident([
            survey["question-12-0"],
            survey["question-12-1"],
            survey["question-12-2"],
        ]);

        if (hasExperience) score += 40;
        if (hasGreatExperience) score += 30;
        if (isAppConfident) score += 30;

        completion["module-4"].initialCompletion = score;
        completion["module-4"].currentCompletion = score;
    }
    //Module 5
    {
        let score = 0;

        let canWearConfident = isConfident([
            survey["question-15-0"],
            survey["question-15-1"],
        ]);

        if (hasExperience) score += 40;
        if (hasGreatExperience) score += 30;
        if (canWearConfident) score += 30;

        completion["module-5"].initialCompletion = score;
        completion["module-5"].currentCompletion = score;
    }
    //Module 6
    {
        let score = 0;

        let isBehaviorExperienced = isConfident(
            survey["module-6"],
            responsesByModule.m6.criteriaQ5,
            3
        );
        let isBehaviorConfident = isConfident([
            survey["question-11-0"],
            survey["question-11-1"],
            survey["question-11-2"],
            survey["question-11-3"],
            survey["question-11-4"],
        ]);

        if (isBehaviorExperienced) score += 50;
        if (isBehaviorConfident) score += 50;

        completion["module-6"].initialCompletion = score;
        completion["module-6"].currentCompletion = score;
    }
    //Module 7
    {
        let score = 0;
        let hasTechProfiles = containsAtLeast(
            survey["question-7"],
            responsesByModule.m7.criteriaQ7,
            3
        );

        let hasManyInterviewsAndOffers =
            containsAtLeast(
                [survey["question-8"]],
                responsesByModule.m7.criteriaQ8,
                1
            ) &&
            hasManyOffers;

        let isTechConfident = isConfident([
            survey["question-10-0"],
            survey["question-10-1"],
            survey["question-10-2"],
            survey["question-10-3"],
            survey["question-10-4"],
            survey["question-10-5"],
        ]);

        let isCodingALot = containsAtLeast(
            [survey["question-18"]],
            responsesByModule.m7.criteriaQ18,
            1
        );

        if (hasTechProfiles) score += 10;
        if (hasManyInterviewsAndOffers) score += 30;
        if (isTechConfident) score += 40;
        if (isCodingALot) score += 20;

        completion["module-7"].initialCompletion = score;
        completion["module-7"].currentCompletion = score;
    }

    //Module 8

    //Module 9

    //Module 10

    //Module 11
    {
        let score = 0;
        let hasPitched = containsAtLeast(
            survey["question-5"],
            responsesByModule.m11.criteriaQ5,
            2
        );

        if (hasPitched) score += 40;
        if (hasManyOffers) score += 60;

        completion["module-11"].initialCompletion = score;
        completion["module-11"].currentCompletion = score;
    }

    return completion;
};

module.exports = makeCompletion;
