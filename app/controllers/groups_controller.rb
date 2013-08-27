class GroupsController < ApplicationController

  # GET /groups.json
  def index
    render json: Group.all
  end

  # GET /groups/1.json
  def show
    group = Group.find params[:id]
    render json: group
  end

  # POST /groups.json
  def create
    client_id = params[:group][:client_id]
    group = Group.new params[:group]
    group.client_id = client_id

    if group.save
      render json: group, status: :created
    else
      render json: { errors: group.errors }, status: :unprocessable_entity
    end
  end

  # PUT /groups/1.json
  def update
    group = Group.find params[:id]
    if group.update_attributes params[:group]
      render json: group, status: :ok
    else
      render json: { errors: group.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /groups/1.json
  def destroy
    group = Group.find params[:id]
    group.destroy
    render json: nil, status: :ok
  end
end
