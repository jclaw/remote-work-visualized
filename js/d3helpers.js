// https://github.com/wbkd/d3-extended
d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};
d3.selection.prototype.moveToBack = function() {
    return this.each(function() {
        var firstChild = this.parentNode.firstChild;
        if (firstChild) {
            this.parentNode.insertBefore(this, firstChild);
        }
    });
};

function onClick(ids) {
    var MCtrl = new mapCtrl;
    var SBCtrl = new stackedBarCtrl;

    return function(d3elements, thisId) {

        d3elements.on("click", function(d) {
            var stateAbbrev = {
                '#map': function(d) { return d.id },
                '#stackedBar': function(d) { return d.data.state }
            }

            MCtrl.select(stateAbbrev[thisId](d));
            SBCtrl.select(stateAbbrev[thisId](d));
        })

        return d3elements;
    }

    function mapCtrl() {
        var prevElement, state;
        this.select = function(stateAbbrev) {
            console.log(stateAbbrev);
            state = d3.select(ids.map).select('.state' + '.' + stateAbbrev);
            console.log(state.datum());
            state.classed('selected', true)
                .moveToFront();

            if (prevElement) prevElement.classed('selected', false);
            prevElement = state;

            return state;
        }
        this.deselect = function() {

        }
    }

    function stackedBarCtrl() {
        var states;
        this.select = function(stateAbbrev) {


            $('.select-rect').trigger('show', stateAbbrev)

            return states;
        }

        this.deselect = function() {

        }
    }
}
