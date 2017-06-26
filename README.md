# Angular 4 Dashboard

A lot of my client projects are dashboards.  Many clients want something highly customized, so it is not possible for me to share any of the work as it is covered by NDA.

I thought it would be interesting to do an open-source dashboard to illustrate the ease of integration of third-party charting codes into Angular as well as discuss chart selection and preparing data for visualization.  These topics may be of interest to developers just beginning a journey into data viz.

I played tennis many, many years ago and my favorite player of the modern era is [Roger Federer].  For sake of discussion, suppose a client requested a dashboard that facilitated quick comparison of Roger's (or any other player's) win/loss record against marquee players, various types of tournaments, and rally length/shot selection/winners/unforced errors vs. the field.

This demonstration illustrates how to create such a dashboard using Angular 4, Teradata Covalent, Google Material 2, and Chart.js.  

I know a lot of people like to use the 'Angular wrappers' for various charting packages and ng2-charts generally works well.  If you are like me, then you frequently have application requirements that expose issues with these 'wrappers,' so it is helpful to understand how to integrate a package such as _Chart.js_ directly into Angular.  The process is rather easy (refer to the _.angular-cli.json_ file) and it opens up a wealth of online knowledge regarding how to use this package.


Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Angular: 4.2.3

Teradata Covalent: 1.0.0-beta.5-1

Material: 2.0.0-beta.6

Angular CLI: 1.0.0


## Installation

Installation involves all the usual suspects

  - npm, typings, and Angular 2 CLI installed globally (make sure to update to 1.0.0)
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)


### Preparing For Visualization

A good visualization is like a good UI, which is like a good joke.  If you have to explain it, it's not very good :)  For purposes of illustration, I included four different chart types that display raw and transformed data comparisons.  This allows you to see some good and not so good approaches to the same problem.

The dashboard is divided (vertically) into two halves.  The top half visually compares Federer vs. the field in percentage of rally length, shot selection, winners, and unforced errors.  When comparing an individual player vs. the field, that player is often separated from others by only a small percentage.  Typical amount-comparison charts such as bar/stacked bar and pie are often poor choices for this type of raw data.

The first chart (serpentine, left-to-right and top-down) compares the length of Roger's rallies vs. the field in a stacked bar chart.  The most common rally length is 1-3 shots, but the visual comparison falls short in indicating the amount of separation of Federer vs. the field.  In fact, it is necessary to roll over the bars to find out that 59.2 percent of Roger's rallies are 1-3 shots vs. 58.2 for the field.  The stacked bar looks nice but is a poor choice when there is little separation between comparative items or a single outlier dominates the cumultative bar length.

In this case, I think it is less the choice of the chart and more the type of data being visualized.  The second chart also illustrates a percentage comparison vs the field of shot frequency.  Instead of viewing raw percentages, a single bar displays the ratio of Federer/Field, so that a value of one indicates parity against the rest of the tour.

A bar chart can be used and it provides a much quicker visual comparison of shot comparison.  Notice that outliers are more easily determined, namely the Roger hits a LOT more backhand slices and net shots than everyone else on tour.

While the small data transformation is helpful, above/below visualizations are even better with a more familiar baseline.  Another data transformation is Federer/Field - 1, which sets zero as the parity value.  The third chart is a simple point chart, and it compares Roger's winner percentage on various shots vs. the field.  I like this on the best as the above/below zero-line is very intuitive and the chart's minimalism makes it very easy to spot strengths and weaknesses.  For example, everyone on tour wants to hit the big forehand winner.  The major championship leader is only marginally better than the field in in this category, and he rarely hits backhand winners.  The _Net_ category is particularly revealing and combined with the prior chart, we can deduce that Roger hits lots of defensive slices and approach shots with that backhand to setup winning net play.

The final chart is a traditional favorite (except for those of us with lots of dataviz experience) - the pie or donut chart.  Pies are particularly difficult for the average person to make area comparisons.  Even with transformed data, is is difficult to deduce anything from this chart without a rollover to obtain a look at the actual data.  However, if you need access to the actual data to make a conclusion, why have a chart in the first place?

I guess you can tell I don't like pies :)

A data table is used to provide a quick visual summary of Roger's win/loss percentage both in various types of tournaments (grand slams, Masters 1000, etc) as well as marquee players.  The table is sorted on win/loss percentage and is searchable.  For example, search 'Nadal' to see Roger's W/L record vs. Rafael Nadal.

I think it's very cool that the Covalent data table can be used pretty much 'out of the box' for dashboards such as these.

Note that the charts are fully responsive.


### Building and Running the demo

After installation, _ng-build_ and _ng-serve_ are your friends.  Build production or dev. as you see fit.  localhost:4200 to run the demo, at which point you should see the following.

![Image of Chart Demo]
(http://algorithmist.net/image/federer.png)

Other than deriving from a common base component, each of the charts was implemented independently of the others.  This allows for considerable customization at the expense of some DRY.

The demo has been tested in late-model Chrome on a Mac. 


## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <http://algorithmist.net>

[Roger Federer]: <http://www.rogerfederer.com>

