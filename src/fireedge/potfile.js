/* Copyright 2002-2019, OpenNebula Project, OpenNebula Systems                */
/*                                                                            */
/* Licensed under the Apache License, Version 2.0 (the "License"); you may    */
/* not use this file except in compliance with the License. You may obtain    */
/* a copy of the License at                                                   */
/*                                                                            */
/* http://www.apache.org/licenses/LICENSE-2.0                                 */
/*                                                                            */
/* Unless required by applicable law or agreed to in writing, software        */
/* distributed under the License is distributed on an "AS IS" BASIS,          */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   */
/* See the License for the specific language governing permissions and        */
/* limitations under the License.                                             */
/* -------------------------------------------------------------------------- */

const { createReadStream, generateFile } = require('fireedge-genpotfile');
const constants = require('./src/utils/constants');
const clientConstants = require('./src/public/constants');

const testFolder = './src/public';
const exportFile = './src/public/assets/languages/messages.pot';
const definitions = { ...constants, ...clientConstants };

// function Tr()
const optsFunc = {
  regex: /Tr(\("|\('|\()[a-zA-Z0-9_ ]*("\)|'\)|\))/g,
  removeStart: /Tr(\()/g,
  removeEnd: /(\))/g,
  regexTextCaptureIndex: 0,
  definitions
};

// React component <Translate word="word"/>
const optsComponent = {
  regex: /<Translate word=('|"|{|{'|{")[a-zA-Z0-9_ ]*('|"|}|'}|"}) \/>/g,
  removeStart: /<Translate word=('|"|{|{'|{")/g,
  removeEnd: /('|"|}|'}|"}) \/>/g,
  regexTextCaptureIndex: 0,
  definitions
};

createReadStream(testFolder, optsFunc);
createReadStream(testFolder, optsComponent);

generateFile(exportFile);
