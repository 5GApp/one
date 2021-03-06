# -------------------------------------------------------------------------- #
# Copyright 2002-2020, OpenNebula Project, OpenNebula Systems                #
#                                                                            #
# Licensed under the Apache License, Version 2.0 (the "License"); you may    #
# not use this file except in compliance with the License. You may obtain    #
# a copy of the License at                                                   #
#                                                                            #
# http://www.apache.org/licenses/LICENSE-2.0                                 #
#                                                                            #
# Unless required by applicable law or agreed to in writing, software        #
# distributed under the License is distributed on an "AS IS" BASIS,          #
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   #
# See the License for the specific language governing permissions and        #
# limitations under the License.                                             #
#--------------------------------------------------------------------------- #

require 'resources/resource'

module OneProvision

    # Cluster
    class Cluster < Resource

        # Class constructor
        def initialize
            super

            @pool = OpenNebula::ClusterPool.new(@client)
            @type = 'cluster'
        end

        # Creates a new cluster in OpenNebula
        #
        # @param template [Hash] Cluster template information
        #
        # @return [Integer] Resource ID
        def create(template)
            new_object

            rc = @one.allocate(template['name'])
            Utils.exception(rc)
            rc = @one.update(Utils.template_like_str(template), true)
            Utils.exception(rc)
            rc = @one.info
            Utils.exception(rc)

            @one.id.to_i
        end

        # Info an specific object
        #
        # @param id [Integer] Object ID
        def info(id)
            @one = OpenNebula::Cluster.new_with_id(id, @client)
            @one.info
        end

        private

        # Creates new ONE object
        def new_object
            @one = OpenNebula::Cluster.new(OpenNebula::Cluster.build_xml,
                                           @client)
        end

    end

end
