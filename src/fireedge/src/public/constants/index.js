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

module.exports = {
  jwtName: 'SunstoneToken',
  by: {
    text: 'OpenNebula',
    url: 'https://opennebula.io/'
  },
  endpointsRoutes: {
    login: '/api/auth/',
    userInfo: '/api/user/info'
  },
  ONEADMIN_ID: '0',
  FILTER_POOL: {
    PRIMARY_GROUP_RESOURCES: '-4',
    USER_RESOURCES: '-3',
    ALL_RESOURCES: '-2',
    USER_GROUPS_RESOURCES: '-1'
  },
  TYPE_INPUT: {
    TEXT: 'text',
    SELECT: 'select',
    CHECKBOX: 'checkbox',
    AUTOCOMPLETE: 'autocomplete'
  }
};
