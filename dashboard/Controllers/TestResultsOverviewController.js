/*
 * Copyright (C) 2015 University of Washington.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. AND ITS CONTRIBUTORS ``AS IS''
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL APPLE INC. OR ITS CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

WK.TestResultsOverviewController = function() {
    WK.Object.call(this);

    // First, set up data sources.
    // this._resultsDataSource = new WK.TestResultDataSource("https://webkit-test-results.appspot.com/", "../data/");
    this._builderListDataSource = new WK.BuilderListDataSource("./Legacy/builders.jsonp");
    this._builderListDataSource.loadBuilders()
        .then(this._buildersListLoaded.bind(this));

    // Build the UI skeleton.
    this.element = document.getElementById("content");
    var headerElement = document.createElement("h1");
    headerElement.textContent = "Test Results History";
    this.element.appendChild(headerElement);

    // Set up initial view state.

}

WK.TestResultsOverviewController.prototype = {
    __proto__: WK.Object.prototype,
    constructor: WK.TestResultsOverviewController,

    // Public

    // Private

    this._buildersListLoaded: function(builders)
    {
        this._builders = builders;
        console.log("Loaded builders: ", builders);

        _.each(builders, function(builder) {
            //this._resultsDataSource.fetchResultsForBuilder(builder);
        }, this);
    }
};