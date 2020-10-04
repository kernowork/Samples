# Samples

A collection of Lightning Web Components. (viewSource is adapted from  https://github.com/trailheadapps/lwc-recipes/tree/master/force-app/main/default/viewSource )

## Tip Calculator

Applies a tip (10%, 15%, 20%, or custom) to a bill and splits total amongst party. 

## Tip Calculator LMS

Same as Tip Calculator, but publishes to a message channel via Lightning Message Service.

## Tip Reaction

Receives the tip rate from tipCalculatorLMS via Lightning Message Service (Tip.messageChannel-meta.xml) and displays a reaction:
* less than 13 percent = 'Oh, you have got to be kidding me!'
* greater/equal 13 percent and less/equal 19 percent = 'Surely you can do better than that...'
* greater than 19 percent = 'Thank you so much!'


NOTE: LMS doesn't support Lightning Communities. Tip Calculator has the LMS code commented out in order to display on a Communities page




